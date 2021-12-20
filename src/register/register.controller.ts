import { Controller, Get, UseGuards, Header, UseInterceptors, Post, UploadedFile, Res, Param, Delete, Body, Patch, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiParam, ApiConsumes, ApiBody, ApiOperation, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegisterExtender, RegisterService } from './register.service';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { IResponse } from 'common/interfaces/response.interface';
import { ResponseSuccess, ResponseError } from 'common/dto/response.dto';
import { CompanyDto, VideoDto } from './dto/register.dto';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('Register')
@ApiBearerAuth()
@Controller({
  path: 'register',
  version: '1',
})
@UseInterceptors(LoggingInterceptor, TransformInterceptor)

export class RegisterController {
	constructor(
    private RegisterService: RegisterService,
  ) {}

  @ApiOperation({ summary: 'Get all Companies information API' })
  @ApiCreatedResponse({
    description: 'Success Response',
    type: [CompanyDto],
  })
  @Get('companies')
  public async getPages(): Promise<IResponse> {
    try {
      const response = await this.RegisterService.getCompanies();
      return new ResponseSuccess('REGISTER.GETALLCOMPANIES.SUCCESS', response);
    } catch (error) {
      return new ResponseError('REGISTER.GETALLCOMPANIES.ERROR', error);
    }
  }

  @ApiOperation({ summary: 'Add or Update page API with page informations' })
  @ApiResponse({ status: 200, description: 'Success Response', type: CompanyDto})
  @Post('company')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
        businessType: { type: 'string' },
        activityType: { type: 'string' },
        applicationDate: { type: 'date' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(RegisterExtender)
  @UseInterceptors(FileInterceptor('file'))
  async addCompany(@UploadedFile() file, @Body() companyInfo){
    if (file) {
      await this.RegisterService.upload(file, 'file');
    }
    const file_url = file ? `https://${process.env.AZURE_STORAGE_NAME}.blob.core.windows.net/files/${file.originalname}` : '';
    try {
      const data = {
        firstName: companyInfo.firstName,
        lastName: companyInfo.lastName,
        email: companyInfo.email,
        phone: companyInfo.phone,
        businessType: companyInfo.businessType,
        activityType: companyInfo.activityType,
        applicationDate: companyInfo.applicationDate,
        fileUrl: file_url,
        originalname: file ? file.originalname : '',
      };
      const response = await this.RegisterService.saveCompanyToDB(data);
      return response._id;
    } catch (error) {
      return new ResponseError('COMPANY.ADD.ERROR', error);
    }
  }

  @ApiOperation({ summary: 'Add or Update company details API' })
  @ApiResponse({ status: 200, description: 'Success Response'})
  @Post('company/details')
  async addCompanyDetails(@Body() CompanyDetails){
    try {
      const response = await this.RegisterService.saveCompanyDetailsToDB(CompanyDetails);
      return false;
    } catch (error) {
      return new ResponseError('COMPANY.ADD.ERROR', error);
    }
  }

  @ApiOperation({ summary: 'Upload Video API' })
  @ApiResponse({ status: 200, description: 'Success Response', type: VideoDto})
  @Post('video')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
        businessType: { type: 'string' },
        applicationDate: { type: 'date' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(RegisterExtender)
  @UseInterceptors(FileInterceptor('file'))
  async addVideo(@UploadedFile() file, @Body() companyInfo){
    const filename = `${uuidv4()}.${file.originalname.split('.').pop()}`;
    if (file) {
      await this.RegisterService.upload(file, 'video', filename);
    }
    const file_url = file ? `https://${process.env.AZURE_STORAGE_NAME}.blob.core.windows.net/${process.env.AZURE_VIDEO_CONTAINER_NAME}/${filename}` : '';
    try {
      const data = {
        firstName: companyInfo.firstName,
        lastName: companyInfo.lastName,
        email: companyInfo.email,
        phone: companyInfo.phone,
        businessType: companyInfo.businessType,
        applicationDate: companyInfo.applicationDate,
        fileUrl: file_url,
        originalname: file ? file.originalname : '',
      };
      const response = await this.RegisterService.saveVideoToDB(data);
      return true;
    } catch (error) {
      return new ResponseError('COMPANY.ADD.ERROR', error);
    }
  }

  @ApiOperation({ summary: 'Get all Videos information API' })
  @ApiCreatedResponse({
    description: 'Success Response',
    type: [VideoDto],
  })
  @Get('videos')
  public async getVideos(): Promise<IResponse> {
    try {
      const response = await this.RegisterService.getVideos();
      return new ResponseSuccess('REGISTER.GETALLVIDEOS.SUCCESS', response);
    } catch (error) {
      return new ResponseError('REGISTER.GETALLVIDEOS.ERROR', error);
    }
  }
}