import * as mongoose from 'mongoose';

export const PagesSchema = new mongoose.Schema({
  sections: [{type: mongoose.Types.ObjectId, ref: 'Section'}],
  type: String,
  pageTitle: String,
  formType: String,
  formTitle: String,
  submitButtonText: String,
  dropText: String,
  containsNews: Boolean,
  createdAt: { type: Date, default: Date.now },
});

export const SectionSchema = new mongoose.Schema({
	items: [{type: mongoose.Types.ObjectId, ref: 'Items'}],
  type: String,
  title: [String],
  imgUrl: String,
  originalname: String,
  subTitle: String,
  description: [String],
	action: String,
  createdAt: { type: Date, default: Date.now },
});

export const ItemsSchema = new mongoose.Schema({
  title: String,
  imgUrl: String,
  description: String,
  originalname: String,
  action: String,
	value: Number,
  createdAt: { type: Date, default: Date.now },
});
