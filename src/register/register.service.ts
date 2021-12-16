import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { Model, Types } from 'mongoose';
import { CompanyInterface } from './interfaces/register.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CompanyDto } from './dto/register.dto';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterExtender implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    if (req && req.file && req.body) {
      req.file['name'] = req.body?.name;
      req.file['packageId'] = req.body?.packageId;
    }
    return next.handle();
  }
}

@Injectable()
export class RegisterService {
	constructor(
    @InjectModel('Companies') private readonly companiesModel: Model<CompanyInterface>,
	) { }

  azureConnection = process.env.AZURE_CONNECTION_STRING;
  containerName = process.env.AZURE_FILE_CONTAINER_NAME;

  getBlobClient(imageName:string):BlockBlobClient{
    const blobClientService = BlobServiceClient.fromConnectionString(this.azureConnection);
    const containerClient = blobClientService.getContainerClient(this.containerName);
    const blobClient = containerClient.getBlockBlobClient(imageName);
    return blobClient;
  }

  async getfileStream(fileName: string){
    const blobClient = this.getBlobClient(fileName);
    var blobDownloaded = await blobClient.download();
    return blobDownloaded.readableStreamBody;
  }

  async delete(filename: string){
    const blobClient = this.getBlobClient(filename);
    await blobClient.deleteIfExists();
  }

  async upload(file:Express.Multer.File){
    const blobClient = this.getBlobClient(file.originalname);
    await blobClient.uploadData(file.buffer);
  }

  async getCompanies(): Promise<CompanyInterface[]> {
    return await this.companiesModel.find().exec();
  }

  async saveCompanyToDB(data: any){
    const tempNewApp = {
      ...data
    };
    const createdApp = new this.companiesModel(tempNewApp);
    return await createdApp.save();
  }
}