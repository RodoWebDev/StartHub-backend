import { ApiProperty } from "@nestjs/swagger";
import { Document, Types } from 'mongoose';

export class ItemsInterface {
	constructor(object: any) {
		this.imgUrl = object.imgUrl;
		this.title = object.title;
		this.description = object.description;
		this.action = object.action;
		this.value = object.value;
		this.originalname = object.originalname;
	}

	@ApiProperty()
	title: string;

	@ApiProperty()
	imgUrl: string;

	@ApiProperty()
	description: [string];

	@ApiProperty()
	action: string;

	@ApiProperty()
	value: number;

	@ApiProperty()
	originalname: number;
}

export class SectionInterface extends Document {
	@ApiProperty()
	id: string;

	@ApiProperty()
	pageType: string;

	@ApiProperty()
	type: string;

	@ApiProperty()
	title: [string];

	@ApiProperty()
	imgUrl: string;

	@ApiProperty()
	originalname: string;

	@ApiProperty()
	subTitle: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	action: string;

	@ApiProperty()
	items: [string];
}

export class PagesInterface extends Document {
	@ApiProperty()
	pageTitle: string;

	@ApiProperty()
	sections: [string];

	@ApiProperty()
	formType: string;

	@ApiProperty()
	formTitle: string;

	@ApiProperty()
	submitButtonText: string;

	@ApiProperty()
	dropText: string;

	@ApiProperty()
	containsNews: boolean;
}