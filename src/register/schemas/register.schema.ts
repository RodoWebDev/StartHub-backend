import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  originalname: String,
  email: String,
  phone: String,
  businessType: String,
  activityType: String,
  fileUrl: String,
  applicationDate: Date,
  createdAt: { type: Date, default: Date.now },
});
