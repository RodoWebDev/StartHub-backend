import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { Model, Types } from 'mongoose';
import { SectionInterface, PagesInterface, ItemsInterface } from './interfaces/section.interface';
import { InjectModel } from '@nestjs/mongoose';
import { PagesDto, SectionDto, ItemsDto } from './dto/section.dto';
import { Observable } from 'rxjs';

@Injectable()
export class SectionExtender implements NestInterceptor {
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
export class SectionService {
	constructor(
    @InjectModel('Section') private readonly sectionModel: Model<SectionInterface>,
    @InjectModel('Pages') private readonly pagesModel: Model<PagesInterface>,
    @InjectModel('Items') private readonly itemsModel: Model<ItemsInterface>,
	) { }

  azureConnection = process.env.AZURE_CONNECTION_STRING;
  containerName = process.env.AZURE_CONTAINER_NAME;

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
    const url = await blobClient.uploadData(file.buffer);
  }

  async getPages(): Promise<PagesInterface[]> {
    return await this.pagesModel.find()
      .populate({path: 'sections', model: 'Section', populate: {path: 'items', model: 'Items'}})
      .exec();
  }

  async savePageToDB(data: any){
    if (data.type) {
      const page = await this.pagesModel.findOne({ type: data.type }).exec();
      if (!page) {
        const tempNewApp = {
          ...data
        };
        const createdApp = new this.pagesModel(tempNewApp);
        return await createdApp.save();
      } else {
        page.pageTitle = data.pageTitle;
        page.formType = data.formType;
        page.formTitle = data.formTitle;
        page.submitButtonText = data.submitButtonText;
        page.containsNews = data.containsNews;
        page.dropText = data.dropText;
        return await page.save();
      }
    } else {
      throw new HttpException(
        'PAGES.ADD.MISSING_MANDATORY_PARAMETERS',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async findByName(type: string): Promise<SectionInterface> {
    return await this.sectionModel.findOne({ type }).exec();
  }

  async getAllSection(): Promise<SectionInterface[]> {
    return await this.sectionModel.find().exec();
  }

  async sectionFindById(id: string | Types.ObjectId): Promise<any> {
    const _id = typeof id === 'string' && (id.length === 12 || id.length === 24) ? new Types.ObjectId(id) : id;
    return await this.sectionModel.findById(_id);
  }

  async saveSectionToDB(data: SectionDto){
    if (data.pageType) {
      try {
        if (!data.id) {
          const tempNewSection = {
            ...data
          };
          const createdSection = new this.sectionModel(tempNewSection);
          await createdSection.save();
          const page = await this.pagesModel.findOne({type: data.pageType});
          page.sections.push(createdSection._id);
          await page.save();
          return;
        } else {
          const _id = typeof data.id === 'string' && data.id !== '' ? new Types.ObjectId(data.id) : data.id;
          const section = await this.sectionFindById(_id);
          section.type = data.type;
          if (data.imgUrl !== '') {
            section.imgUrl = data.imgUrl;
          }
          section.subTitle = data.subTitle;
          section.title = data.title;
          section.originalname = data.originalname;
          section.action = data.action;
          section.description = data.description;
          return await section.save();
        }
      } catch (err) {
        console.log(err);
        throw new HttpException(
          'SECTIONS.ADD.ERROR',
          HttpStatus.FORBIDDEN,
        );
      }
    } else {
      throw new HttpException(
        'SECTIONS.ADD.MISSING_MANDATORY_PARAMETERS',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async findById(id: string | Types.ObjectId): Promise<any> {
    const _id = typeof id === 'string' && (id.length === 12 || id.length === 24) ? new Types.ObjectId(id) : id;
    return await this.itemsModel.findById(_id);
  }

  async saveItemToDB(data: ItemsDto){
    if (data.sectionType) {
      try {
        if (data.id === '') {
          const tempNewItem = {
            ...data
          };
          const createdItem = new this.itemsModel(tempNewItem);
          await createdItem.save();
          const section = await this.sectionModel.findOne({type: data.sectionType});
          section.items.push(createdItem._id);
          await section.save();
          return;
        } else {
          const _id = typeof data.id === 'string' && data.id !== '' ? new Types.ObjectId(data.id) : data.id;
          const item = await this.findById(_id);
          if (data.imgUrl !== '') {
            item.imgUrl = data.imgUrl;
          }
          item.title = data.title;
          item.description = data.description;
          item.originalname = data.originalname;
          item.action = data.action;
          item.value = data.value;
          return await item.save();
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      throw new HttpException(
        'ITEMS.ADD.MISSING_MANDATORY_PARAMETERS',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}