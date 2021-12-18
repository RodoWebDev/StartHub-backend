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
  
	partnerName: String,

	
	applicationType: String,

	
	companyName: String,

	
	countryOfRegistration: String,

	
	addressOfParentCompany: String,

	
	enCompanyName1: String,

	
	enCompanyName2: String,

	
	enCompanyName3: String,

	
	franchisee: String,

	
	licenseType: String,

	
	visaPackage: String,

	
	establishmentCard: String,

	
	activityNumber1: String,

	
	activityName1: String,

	
	activityNumber2: String,

	
	activityName2: String,

	
	activityNumber3: String,

	
	activityName3: String,

	
	activityNumber4: String,

	
	activityName4: String,

	
	shareholdingType: String,

	
	proposedShareCaptial: String,

	
	shareValue: String,

	
	totalNumberOfShares: String,

	
	generalManagerName: String,

	
	generalManagerSignature: String,

	
	terms: String,

	
	tradeName: String,

	
	role1: String,

	
	shares1: String,

	
	gender1: String,

	
	salutation1: String,

	
	mobilePhone1: String,

	
	passportNumber1: String,

	
	passportIssueDate1: String,

	
	passportExpiryDate1: String,

	
	placeOfIssue1: String,

	
	placeCountryOfIssue1: String,

	
	countryOfBirth1: String,

	
	dateOfBirth1: String,

	
	currentNationality1: String,

	
	previousNationality1: String,

	
	foreignPassport1: String,

	
	isResidentOfUAE1: String,

	
	uidNumber1: String,

	
	emiratesIdNumber1: String,

	
	fileNumber1: String,

	
	visitOrResidLast5Years1: String,

	
	uidNumber5Years1: String,

	
	addressLine11: String,

	
	addressLine21: String,

	
	poBox1: String,

	
	postalCode1: String,

	
	city1: String,

	
	state1: String,

	
	country1: String,

	
	fatherFirstName1: String,

	
	fatherMiddleName1: String,

	
	fatherLastName1: String,

	
	generalManagerName1: String,

	
	generalManagerSignature1: String,

	
	
	role2: String,

	
	shares2: String,

	
	gender2: String,

	
	salutation2: String,

	
	mobilePhone2: String,

	
	passportNumber2: String,

	
	passportIssueDate2: String,

	
	passportExpiryDate2: String,

	
	placeOfIssue2: String,

	
	placeCountryOfIssue2: String,

	
	countryOfBirth2: String,

	
	dateOfBirth2: String,

	
	currentNationality2: String,

	
	previousNationality2: String,

	
	foreignPassport2: String,

	
	isResidentOfUAE2: String,

	
	uidNumber2: String,

	
	emiratesIdNumber2: String,

	
	fileNumber2: String,

	
	visitOrResidLast5Years2: String,

	
	uidNumber5Years2: String,
	
	
	addressLine12: String,

	
	addressLine22: String,

	
	poBox2: String,

	
	postalCode2: String,

	
	city2: String,

	
	state2: String,

	
	country2: String,

	
	fatherFirstName2: String,

	
	fatherMiddleName2: String,

	
	fatherLastName2: String,

	
	generalManagerName2: String,

	
	generalManagerSignature2: String,


	
	role3: String,

	
	shares3: String,

	
	gender3: String,

	
	salutation3: String,

	
	mobilePhone3: String,

	
	passportNumber3: String,

	
	passportIssueDate3: String,

	
	passportExpiryDate3: String,

	
	placeOfIssue3: String,

	
	placeCountryOfIssue3: String,

	
	countryOfBirth3: String,

	
	dateOfBirth3: String,

	
	currentNationality3: String,

	
	previousNationality3: String,

	
	foreignPassport3: String,

	
	isResidentOfUAE3: String,

	
	uidNumber3: String,

	
	emiratesIdNumber3: String,

	
	fileNumber3: String,

	
	visitOrResidLast5Years3: String,

	
	uidNumber5Years3: String,
	
	
	addressLine13: String,

	
	addressLine23: String,

	
	poBox3: String,

	
	postalCode3: String,

	
	city3: String,

	
	state3: String,

	
	country3: String,

	
	fatherFirstName3: String,

	
	fatherMiddleName3: String,

	
	fatherLastName3: String,

	
	generalManagerName3: String,

	
	generalManagerSignature3: String,


	
	role4: String,

	
	shares4: String,

	
	gender4: String,

	
	salutation4: String,

	
	mobilePhone4: String,

	
	passportNumber4: String,

	
	passportIssueDate4: String,

	
	passportExpiryDate4: String,

	
	placeOfIssue4: String,

	
	placeCountryOfIssue4: String,

	
	countryOfBirth4: String,

	
	dateOfBirth4: String,

	
	currentNationality4: String,

	
	previousNationality4: String,

	
	foreignPassport4: String,

	
	isResidentOfUAE4: String,

	
	uidNumber4: String,

	
	emiratesIdNumber4: String,

	
	fileNumber4: String,

	
	visitOrResidLast5Years4: String,

	
	uidNumber5Years4: String,
	
	
	addressLine14: String,

	
	addressLine24: String,

	
	poBox4: String,

	
	postalCode4: String,

	
	city4: String,

	
	state4: String,

	
	country4: String,

	
	fatherFirstName4: String,

	
	fatherMiddleName4: String,

	
	fatherLastName4: String,

	
	generalManagerName4: String,

	
	generalManagerSignature4: String,


	
	role5: String,

	
	shares5: String,

	
	gender5: String,

	
	salutation5: String,

	
	mobilePhone5: String,

	
	passportNumber5: String,

	
	passportIssueDate5: String,

	
	passportExpiryDate5: String,

	
	placeOfIssue5: String,

	
	placeCountryOfIssue5: String,

	
	countryOfBirth5: String,

	
	dateOfBirth5: String,

	
	currentNationality5: String,

	
	previousNationality5: String,

	
	foreignPassport5: String,

	
	isResidentOfUAE5: String,

	
	uidNumber5: String,

	
	emiratesIdNumber5: String,

	
	fileNumber5: String,

	
	visitOrResidLast5Years5: String,

	
	uidNumber5Years5: String,
	
	
	addressLine15: String,

	
	addressLine25: String,

	
	poBox5: String,

	
	postalCode5: String,

	
	city5: String,

	
	state5: String,

	
	country5: String,

	
	fatherFirstName5: String,

	
	fatherMiddleName5: String,

	
	fatherLastName5: String,

	
	generalManagerName5: String,

	
	generalManagerSignature5: String,
  createdAt: { type: Date, default: Date.now },
});
