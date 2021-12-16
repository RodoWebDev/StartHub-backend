import { Controller, Get, UseGuards, Header, UseInterceptors, Post, UploadedFile, Res, Param, Delete, Body, Patch, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiParam, ApiConsumes, ApiBody, ApiOperation, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegisterExtender, RegisterService } from './register.service';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { IResponse } from 'common/interfaces/response.interface';
import { ResponseSuccess, ResponseError } from 'common/dto/response.dto';
import { CompanyDto } from './dto/register.dto';

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
      await this.RegisterService.upload(file);
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
      await this.RegisterService.saveCompanyToDB(data);
      return "added";
    } catch (error) {
      return new ResponseError('COMPANY.ADD.ERROR', error);
    }
  }
}