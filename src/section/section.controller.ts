import { Controller, Get, UseGuards, Header, UseInterceptors, Post, UploadedFile, Res, Param, Delete, Body, Patch, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiParam, ApiConsumes, ApiBody, ApiOperation, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { SectionExtender, SectionService } from './section.service';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { IResponse } from 'common/interfaces/response.interface';
import { ResponseSuccess, ResponseError } from 'common/dto/response.dto';
import { PagesDto, SectionDto, ItemsDto } from './dto/section.dto';

@ApiTags('CMS')
@ApiBearerAuth()
@Controller({
  path: 'cms',
  version: '1',
})
@UseInterceptors(LoggingInterceptor, TransformInterceptor)

export class SectionController {
	constructor(
    private SectionService: SectionService,
  ) {}

  @ApiOperation({ summary: 'Get all pages API' })
  @ApiCreatedResponse({
    description: 'Success Response',
    type: [PagesDto],
  })
  @Get('pages')
  public async getPages(): Promise<IResponse> {
    try {
      const response = await this.SectionService.getPages();
      return new ResponseSuccess('PAGES.GETALLPAGES.SUCCESS', response);
    } catch (error) {
      return new ResponseError('PAGES.GETALLPAGES.ERROR', error);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Add page API with page informations' })
  @ApiResponse({ status: 200, description: 'Success Response', type: PagesDto})
  @Post('page')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        type: { type: 'string' },
        pageTitle: { type: 'string' },
        formType: { type: 'string' },
        formTitle: { type: 'string' },
        submitButtonText: { type: 'string' },
        dropText: { type: 'string' },
        containsNews: { type: 'boolean' },
      },
    },
  })
  async addPage(@Body() pageInfo){
    try {
      const data = {
        type: pageInfo.type,
        pageTitle: pageInfo.pageTitle,
        formType: pageInfo.formType,
        formTitle: pageInfo.formTitle,
        dropText: pageInfo.dropText,
        submitButtonText: pageInfo.submitButtonText,
        containsNews: pageInfo.containsNews,
      };
      await this.SectionService.savePageToDB(data);
      return "added";
    } catch (error) {
      return new ResponseError('PAGES.ADD.ERROR', error);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get all section API' })
  @ApiCreatedResponse({
    description: 'Success Response',
    type: [SectionDto],
  })
  @ApiParam({
    name: 'type',
  })
  @Get('section')
  public async getAllSection(): Promise<IResponse> {
    try {
      const response = await this.SectionService.getAllSection();
      return new ResponseSuccess('PAGES.GETSECTION.SUCCESS', response);
    } catch (error) {
      return new ResponseError('PAGES.GETSECTION.ERROR', error);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Add section API with section informations' })
  @ApiResponse({ status: 200, description: 'Success Response', type: SectionDto})
  @Post('section')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        pageType: { type: 'string' },
        type: { type: 'string' },
        title: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        description: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        subTitle: { type: 'string' },
        action: { type: 'string' },
        img: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(SectionExtender)
  @UseInterceptors(FileInterceptor('img'))
  async addSection(@UploadedFile() img, @Body() sectionInfo){
    try {
      if (img) {
        await this.SectionService.upload(img);
      }
      const img_url = img ? `https://${process.env.AZURE_STORAGE_NAME}.blob.core.windows.net/data/${img.originalname}` : '';
      const data = {
        id: sectionInfo.id,
        pageType: sectionInfo.pageType,
        type: sectionInfo.type,
        title: sectionInfo.title.split(","),
        imgUrl: img_url,
        originalname: img ? img.originalname : '',
        subTitle: sectionInfo.subTitle,
        action: sectionInfo.action,
        description: sectionInfo.description.split(".,"),
      };
      await this.SectionService.saveSectionToDB(data);
      return "added";
    } catch (error) {
      return new ResponseError('SECTION.ADD.ERROR', error);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Add Items API with items informations' })
  @ApiResponse({ status: 200, description: 'Success Response', type: ItemsDto})
  @Post('item')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        sectionType: { type: 'string' },
        title: { type: 'string' },
        description: { type: 'string' },
        action: { type: 'string' },
        value: { type: 'string' },
        img: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(SectionExtender)
  @UseInterceptors(FileInterceptor('img'))
  async addItem(@UploadedFile() img, @Body() itemInfo){
    try {
      if (img) {
        await this.SectionService.upload(img);
      }
      const img_url = img ? `https://${process.env.AZURE_STORAGE_NAME}.blob.core.windows.net/data/${img.originalname}` : '';
      const data = {
        id: itemInfo.id,
        sectionType: itemInfo.sectionType,
        title: itemInfo.title,
        imgUrl: img_url,
        originalname: img ? img.originalname : '',
        action: itemInfo.action,
        value: itemInfo.value,
        description: itemInfo.description,
      };
      await this.SectionService.saveItemToDB(data);
      return "added";
    } catch (error) {
      return new ResponseError('ITEM.ADD.ERROR', error);
    }
  }
}