import { ApiProperty } from '@nestjs/swagger';

export class CompanyDto {
	constructor(object: any) {
		this.firstName = object.firstName;
		this.lastName = object.lastName;
		this.originalname = object.originalname;
		this.email = object.email;
		this.phone = object.phone;
		this.businessType = object.businessType;
		this.activityType = object.activityType;
		this.fileUrl = object.fileUrl;
		this.applicationDate = object.applicationDate;
	}

	@ApiProperty({
		type: String,
		required: true,
	})
	firstName: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	lastName: string;

	@ApiProperty({
		type: String,
	})
	originalname: string;

	@ApiProperty({
		type: String,
	})
	email: string;

	@ApiProperty({
		type: String,
	})
	phone: string;

	@ApiProperty({
		type: String,
	})
	businessType: string;

	@ApiProperty({
		type: String,
	})
	activityType: string;

	@ApiProperty({
		type: String,
	})
	fileUrl: string;

	@ApiProperty({
		type: Date,
	})
	applicationDate: Date;
}
