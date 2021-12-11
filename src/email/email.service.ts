import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { EmailDto } from './dto/email.dto';
import { default as config } from '../config';
var SibApiV3Sdk = require('sib-api-v3-sdk');

@Injectable()
export class EmailService implements OnApplicationBootstrap {
  async onApplicationBootstrap() {
  }
  constructor(
  ) {}

  isValidEmail(email: string) {
    if (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    } else return false;
  }

  async sendEmail(emailDto: EmailDto) {
    var defaultClient = SibApiV3Sdk.ApiClient.instance;

    var apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = config.sendinblue.key;

    var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email
    sendSmtpEmail = {
      sender: { email: config.sendinblue.from },
      to: [
        {
          email: 'angeldev0522@gmail.com',
          name: "iSAP StartHub Contact US",
        },
      ],
      subject: `iSAP StartHub Contact US from ${emailDto.name} <${emailDto.Email}>`,
      textContent: emailDto.message,
    };
    try {
      await apiInstance.sendTransacEmail(sendSmtpEmail);
      return true;
    } catch (error) {
      console.log('error =>', error)
      return false;
    }
  }
}
