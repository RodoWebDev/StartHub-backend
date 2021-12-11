import { ApiProperty } from '@nestjs/swagger';

export class EmailDto {
	constructor(object: any) {
		this.name = object.name;
		this.Email = object.Email;
		this.message = object.message;
	}
	@ApiProperty()
	name: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	Email: string;

	@ApiProperty({
		type: String,
		required: true,
	})
	message: string;
}