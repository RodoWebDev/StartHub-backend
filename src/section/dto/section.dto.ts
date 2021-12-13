import { ApiProperty } from '@nestjs/swagger';

export class ItemsDto {
	constructor(object: any) {
		this.id = object.id;
		this.sectionType = object.sectionType;
		this.imgUrl = object.imgUrl;
		this.title = object.title;
		this.description = object.description;
		this.action = object.action;
		this.value = object.value;
		this.originalname = object.originalname;
	}

	@ApiProperty({
		type: String,
	})
	id: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	sectionType: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	title: string;

	@ApiProperty({
		type: String,
	})
	imgUrl: string;

	@ApiProperty({
		type: [String],
	})
	description: [string];

	@ApiProperty({
		type: String,
	})
	action: string;

	@ApiProperty({
		type: Number,
	})
	value: number;

	@ApiProperty({
		type: Number,
	})
	originalname: number;
}

export class SectionDto {
	constructor(object: any) {
		this.id = object.id;
		this.pageType = object.pageType;
		this.type = object.type;
		this.title = object.title;
		this.imgUrl = object.imgUrl;
		this.originalname = object.originalname;
		this.subTitle = object.subTitle;
		this.description = object.description;
		this.action = object.action;
	}

	@ApiProperty({
		type: String,
	})
	id: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	pageType: string;

	@ApiProperty({
		type: String,
	})
	type: string;

	@ApiProperty({
		type: [String],
	})
	title: [string];

	@ApiProperty({
		type: String,
	})
	imgUrl: string;

	@ApiProperty({
		type: String,
	})
	originalname: string;

	@ApiProperty({
		type: String,
	})
	subTitle: string;

	@ApiProperty({
		type: String,
	})
	description: string;

	@ApiProperty({
		type: String,
	})
	action: string;
}

export class PagesDto {
	constructor(object: any) {
		this.pageTitle = object.pageTitle;
		this.sections = object.sections;
		this.formType = object.formType;
		this.formTitle = object.formTitle;
		this.submitButtonText = object.submitButtonText;
		this.containsNews = object.containsNews;
	}

	@ApiProperty({
		type: String,
		required: true,
	})
	pageTitle: string;

	@ApiProperty({
		type: String,
	})
	sections: [string];

	@ApiProperty({
		type: String,
	})
	formType: string;

	@ApiProperty({
		type: String,
	})
	formTitle: string;

	@ApiProperty({
		type: String,
	})
	submitButtonText: string;

	@ApiProperty({
		type: String,
	})
	dropText: string;

	@ApiProperty({
		type: Boolean,
	})
	containsNews: boolean;
}
