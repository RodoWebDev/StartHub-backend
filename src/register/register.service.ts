import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { Model, Types } from 'mongoose';
import { CompanyInterface, VideoInterface } from './interfaces/register.interface';
import { InjectModel } from '@nestjs/mongoose';
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
    @InjectModel('Videos') private readonly videosModel: Model<VideoInterface>,
	) { }

  azureConnection = process.env.AZURE_CONNECTION_STRING;
  containerFileName = process.env.AZURE_FILE_CONTAINER_NAME;
  containerVideoName = process.env.AZURE_VIDEO_CONTAINER_NAME;

  getBlobClient(imageName:string):BlockBlobClient{
    const blobClientService = BlobServiceClient.fromConnectionString(this.azureConnection);
    const containerClient = blobClientService.getContainerClient(this.containerFileName);
    const blobClient = containerClient.getBlockBlobClient(imageName);
    return blobClient;
  }

  getBlobClientVideo(imageName:string):BlockBlobClient{
    const blobClientService = BlobServiceClient.fromConnectionString(this.azureConnection);
    const containerClient = blobClientService.getContainerClient(this.containerVideoName);
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

  async upload(file:Express.Multer.File, type, filename = ''){
    if (type === 'file') {
      const blobClient = this.getBlobClient(file.originalname);
      await blobClient.uploadData(file.buffer);
    }
    const blobClient = this.getBlobClientVideo(filename);
    await blobClient.uploadData(file.buffer);
  }

  async getCompanies(): Promise<CompanyInterface[]> {
    return await this.companiesModel.find().exec();
  }

  async getVideos(): Promise<VideoInterface[]> {
    return await this.videosModel.find().exec();
  }

  async saveCompanyToDB(data: any){
    const tempNewApp = {
      ...data
    };
    const createdApp = new this.companiesModel(tempNewApp);
    return await createdApp.save();
  }

  async saveCompanyDetailsToDB(data: any) {
    try {
      const _id = typeof data.companyId === 'string' && (data.companyId.length === 12 || data.companyId.length === 24) ? new Types.ObjectId(data.companyId) : data.companyId;
      const item = await this.companiesModel.findById(_id);
      item.partnerName = data.partnerName;
      item.applicationType = data.applicationType;
      item.companyName = data.companyName;
      item.countryOfRegistration = data.countryOfRegistration;
      item.addressOfParentCompany = data.addressOfParentCompany;
      item.enCompanyName1 = data.enCompanyName1;
      item.enCompanyName2 = data.enCompanyName2;
      item.enCompanyName3 = data.enCompanyName3;
      item.franchisee = data.franchisee;
      item.licenseType = data.licenseType;
      item.visaPackage = data.visaPackage;
      item.establishmentCard = data.establishmentCard;
      item.activityNumber1 = data.activityNumber1;
      item.activityName1 = data.activityName1;
      item.activityNumber2 = data.activityNumber2;
      item.activityName2 = data.activityName2;
      item.activityNumber3 = data.activityNumber3;
      item.activityName3 = data.activityName3;
      item.activityNumber4 = data.activityNumber4;
      item.activityName4 = data.activityName4;
      item.shareholdingType = data.shareholdingType;
      item.proposedShareCaptial = data.proposedShareCaptial;
      item.shareValue = data.shareValue;
      item.totalNumberOfShares = data.totalNumberOfShares;
      item.generalManagerName = data.generalManagerName;
      item.generalManagerSignature = data.generalManagerSignature;
      item.terms = data.terms;
      item.tradeName = data.tradeName;
      item.role1 = data.role1;
      item.shares1 = data.shares1;
      item.gender1 = data.gender1;
      item.salutation1 = data.salutation1;
      item.mobilePhone1 = data.mobilePhone1;
      item.passportNumber1 = data.passportNumber1;
      item.passportIssueDate1 = data.passportIssueDate1;
      item.passportExpiryDate1 = data.passportExpiryDate1;
      item.placeOfIssue1 = data.placeOfIssue1;
      item.placeCountryOfIssue1 = data.placeCountryOfIssue1;
      item.countryOfBirth1 = data.countryOfBirth1;
      item.dateOfBirth1 = data.dateOfBirth1;
      item.currentNationality1 = data.currentNationality1;
      item.previousNationality1 = data.previousNationality1;
      item.foreignPassport1 = data.foreignPassport1;
      item.isResidentOfUAE1 = data.isResidentOfUAE1;
      item.uidNumber1 = data.uidNumber1;
      item.emiratesIdNumber1 = data.emiratesIdNumber1;
      item.fileNumber1 = data.fileNumber1;
      item.visitOrResidLast5Years1 = data.visitOrResidLast5Years1;
      item.uidNumber5Years1 = data.uidNumber5Years1;
      item.addressLine11 = data.addressLine11;
      item.addressLine21 = data.addressLine21;
      item.poBox1 = data.poBox1;
      item.postalCode1 = data.postalCode1;
      item.city1 = data.city1;
      item.state1 = data.state1;
      item.country1 = data.country1;
      item.fatherFirstName1 = data.fatherFirstName1;
      item.fatherMiddleName1 = data.fatherMiddleName1;
      item.fatherLastName1 = data.fatherLastName1;
      item.generalManagerName1 = data.generalManagerName1;
      item.generalManagerSignature1 = data.generalManagerSignature1;
      
      item.role2 = data.role2;
      item.shares2 = data.shares2;
      item.gender2 = data.gender2;
      item.salutation2 = data.salutation2;
      item.mobilePhone2 = data.mobilePhone2;
      item.passportNumber2 = data.passportNumber2;
      item.passportIssueDate2 = data.passportIssueDate2;
      item.passportExpiryDate2 = data.passportExpiryDate2;
      item.placeOfIssue2 = data.placeOfIssue2;
      item.placeCountryOfIssue2 = data.placeCountryOfIssue2;
      item.countryOfBirth2 = data.countryOfBirth2;
      item.dateOfBirth2 = data.dateOfBirth2;
      item.currentNationality2 = data.currentNationality2;
      item.previousNationality2 = data.previousNationality2;
      item.foreignPassport2 = data.foreignPassport2;
      item.isResidentOfUAE2 = data.isResidentOfUAE2;
      item.uidNumber2 = data.uidNumber2;
      item.emiratesIdNumber2 = data.emiratesIdNumber2;
      item.fileNumber2 = data.fileNumber2;
      item.visitOrResidLast5Years2 = data.visitOrResidLast5Years2;
      item.uidNumber5Years2 = data.uidNumber5Years2;
      item.addressLine12 = data.addressLine12;
      item.addressLine22 = data.addressLine22;
      item.poBox2 = data.poBox2;
      item.postalCode2 = data.postalCode2;
      item.city2 = data.city2;
      item.state2 = data.state2;
      item.country2 = data.country2;
      item.fatherFirstName2 = data.fatherFirstName2;
      item.fatherMiddleName2 = data.fatherMiddleName2;
      item.fatherLastName2 = data.fatherLastName2;
      item.generalManagerName2 = data.generalManagerName2;
      item.generalManagerSignature2 = data.generalManagerSignature2;

      item.role3 = data.role3;
      item.shares3 = data.shares3;
      item.gender3 = data.gender3;
      item.salutation3 = data.salutation3;
      item.mobilePhone3 = data.mobilePhone3;
      item.passportNumber3 = data.passportNumber3;
      item.passportIssueDate3 = data.passportIssueDate3;
      item.passportExpiryDate3 = data.passportExpiryDate3;
      item.placeOfIssue3 = data.placeOfIssue3;
      item.placeCountryOfIssue3 = data.placeCountryOfIssue3;
      item.countryOfBirth3 = data.countryOfBirth3;
      item.dateOfBirth3 = data.dateOfBirth3;
      item.currentNationality3 = data.currentNationality3;
      item.previousNationality3 = data.previousNationality3;
      item.foreignPassport3 = data.foreignPassport3;
      item.isResidentOfUAE3 = data.isResidentOfUAE3;
      item.uidNumber3 = data.uidNumber3;
      item.emiratesIdNumber3 = data.emiratesIdNumber3;
      item.fileNumber3 = data.fileNumber3;
      item.visitOrResidLast5Years3 = data.visitOrResidLast5Years3;
      item.uidNumber5Years3 = data.uidNumber5Years3;
      item.addressLine13 = data.addressLine13;
      item.addressLine23 = data.addressLine23;
      item.poBox3 = data.poBox3;
      item.postalCode3 = data.postalCode3;
      item.city3 = data.city3;
      item.state3 = data.state3;
      item.country3 = data.country3;
      item.fatherFirstName3 = data.fatherFirstName3;
      item.fatherMiddleName3 = data.fatherMiddleName3;
      item.fatherLastName3 = data.fatherLastName3;
      item.generalManagerName3 = data.generalManagerName3;
      item.generalManagerSignature3 = data.generalManagerSignature3;

      item.role4 = data.role4;
      item.shares4 = data.shares4;
      item.gender4 = data.gender4;
      item.salutation4 = data.salutation4;
      item.mobilePhone4 = data.mobilePhone4;
      item.passportNumber4 = data.passportNumber4;
      item.passportIssueDate4 = data.passportIssueDate4;
      item.passportExpiryDate4 = data.passportExpiryDate4;
      item.placeOfIssue4 = data.placeOfIssue4;
      item.placeCountryOfIssue4 = data.placeCountryOfIssue4;
      item.countryOfBirth4 = data.countryOfBirth4;
      item.dateOfBirth4 = data.dateOfBirth4;
      item.currentNationality4 = data.currentNationality4;
      item.previousNationality4 = data.previousNationality4;
      item.foreignPassport4 = data.foreignPassport4;
      item.isResidentOfUAE4 = data.isResidentOfUAE4;
      item.uidNumber4 = data.uidNumber4;
      item.emiratesIdNumber4 = data.emiratesIdNumber4;
      item.fileNumber4 = data.fileNumber4;
      item.visitOrResidLast5Years4 = data.visitOrResidLast5Years4;
      item.uidNumber5Years4 = data.uidNumber5Years4;
      item.addressLine14 = data.addressLine14;
      item.addressLine24 = data.addressLine24;
      item.poBox4 = data.poBox4;
      item.postalCode4 = data.postalCode4;
      item.city4 = data.city4;
      item.state4 = data.state4;
      item.country4 = data.country4;
      item.fatherFirstName4 = data.fatherFirstName4;
      item.fatherMiddleName4 = data.fatherMiddleName4;
      item.fatherLastName4 = data.fatherLastName4;
      item.generalManagerName4 = data.generalManagerName4;
      item.generalManagerSignature4 = data.generalManagerSignature4;

      item.role5 = data.role5;
      item.shares5 = data.shares5;
      item.gender5 = data.gender5;
      item.salutation5 = data.salutation5;
      item.mobilePhone5 = data.mobilePhone5;
      item.passportNumber5 = data.passportNumber5;
      item.passportIssueDate5 = data.passportIssueDate5;
      item.passportExpiryDate5 = data.passportExpiryDate5;
      item.placeOfIssue5 = data.placeOfIssue5;
      item.placeCountryOfIssue5 = data.placeCountryOfIssue5;
      item.countryOfBirth5 = data.countryOfBirth5;
      item.dateOfBirth5 = data.dateOfBirth5;
      item.currentNationality5 = data.currentNationality5;
      item.previousNationality5 = data.previousNationality5;
      item.foreignPassport5 = data.foreignPassport5;
      item.isResidentOfUAE5 = data.isResidentOfUAE5;
      item.uidNumber5 = data.uidNumber5;
      item.emiratesIdNumber5 = data.emiratesIdNumber5;
      item.fileNumber5 = data.fileNumber5;
      item.visitOrResidLast5Years5 = data.visitOrResidLast5Years5;
      item.uidNumber5Years5 = data.uidNumber5Years5;
      item.addressLine15 = data.addressLine15;
      item.addressLine25 = data.addressLine25;
      item.poBox5 = data.poBox5;
      item.postalCode5 = data.postalCode5;
      item.city5 = data.city5;
      item.state5 = data.state5;
      item.country5 = data.country5;
      item.fatherFirstName5 = data.fatherFirstName5;
      item.fatherMiddleName5 = data.fatherMiddleName5;
      item.fatherLastName5 = data.fatherLastName5;
      item.generalManagerName5 = data.generalManagerName5;
      item.generalManagerSignature5 = data.generalManagerSignature5;
      delete data.companyId;
      return await item.save();
    } catch (err) {
      console.log('err =>', err);
    }
  }

  async saveVideoToDB(data: any){
    const tempNewApp = {
      ...data
    };
    const createdApp = new this.videosModel(tempNewApp);
    return await createdApp.save();
  }
}