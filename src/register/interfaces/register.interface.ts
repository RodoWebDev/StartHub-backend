import { ApiProperty } from "@nestjs/swagger";
import { Document, Types } from 'mongoose';

export class CompanyInterface {
	constructor(object: any) {
		this.firstName = object.firstName;
		this.lastName = object.lastName;
		this.originalname = object.originalname;
		this.email = object.email;
		this.phone = object.phone;
		this.businessType = object.businessType;
		this.fileUrl = object.fileUrl;
		this.applicationDate = object.applicationDate;
	}

	@ApiProperty()
	firstName: string;

	@ApiProperty()
	lastName: string;

	@ApiProperty()
	originalname: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	phone: string;

	@ApiProperty()
	businessType: string;

	@ApiProperty()
	activityType: string;

	@ApiProperty()
	fileUrl: string;

	@ApiProperty()
	applicationDate: Date;
}
