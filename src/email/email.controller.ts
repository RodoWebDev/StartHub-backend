import {
  Controller,
  UseInterceptors,
  Post,
  Body,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { EmailService } from './email.service';
import { IResponse } from '../common/interfaces/response.interface';
import { ResponseSuccess, ResponseError } from '../common/dto/response.dto';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { EmailDto } from './dto/email.dto';

@ApiTags('Email')
@ApiBearerAuth()
@Controller({
  path: 'email',
  version: '1',
})
@UseInterceptors(LoggingInterceptor, TransformInterceptor)

export class EmailController {
  constructor(
    private EmailService: EmailService,
  ) {}

  @ApiOperation({ summary: 'Email send API' })
  @ApiResponse({ status: 200, description: 'Success Response', schema: {$ref: getSchemaPath(EmailDto)}})  
  @Post('')
  async sendEmail(@Body() emailDto: EmailDto): Promise<IResponse> {
    try {
      const sent = await this.EmailService.sendEmail(emailDto);
      if (sent) {
        return new ResponseSuccess('EMAIL.EMAIL_REGISTERED_SUCCESSFULLY', { message: 'Email sent' });
      } else {
        return new ResponseError('EMAIL.ERROR.MAIL_NOT_SENT');
      }
    } catch (error) {
      console.log(error);
      return new ResponseError('EMAIL.ERROR.GENERIC_ERROR', error);
    }
  }
}
