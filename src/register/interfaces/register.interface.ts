import { ApiProperty } from "@nestjs/swagger";

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
		this.partnerName = object.partnerName;
		this.applicationType = object.applicationType;
		this.companyName = object.companyName;
		this.countryOfRegistration = object.countryOfRegistration;
		this.addressOfParentCompany = object.addressOfParentCompany;
		this.enCompanyName1 = object.enCompanyName1;
		this.enCompanyName2 = object.enCompanyName2;
		this.enCompanyName3 = object.enCompanyName3;
		this.franchisee = object.franchisee;
		this.licenseType = object.licenseType;
		this.visaPackage = object.visaPackage;
		this.establishmentCard = object.establishmentCard;
		this.activityNumber1 = object.activityNumber1;
		this.activityName1 = object.activityName1;
		this.activityNumber2 = object.activityNumber2;
		this.activityName2 = object.activityName2;
		this.activityNumber3 = object.activityNumber3;
		this.activityName3 = object.activityName3;
		this.activityNumber4 = object.activityNumber4;
		this.activityName4 = object.activityName4;
		this.shareholdingType = object.shareholdingType;
		this.proposedShareCaptial = object.proposedShareCaptial;
		this.shareValue = object.shareValue;
		this.totalNumberOfShares = object.totalNumberOfShares;
		this.generalManagerName = object.generalManagerName;
		this.generalManagerSignature = object.generalManagerSignature;
		this.terms = object.terms;
		this.tradeName = object.tradeName;
		this.role1 = object.role1;
		this.shares1 = object.shares1;
		this.gender1 = object.gender1;
		this.salutation1 = object.salutation1;
		this.mobilePhone1 = object.mobilePhone1;
		this.passportNumber1 = object.passportNumber1;
		this.passportIssueDate1 = object.passportIssueDate1;
		this.passportExpiryDate1 = object.passportExpiryDate1;
		this.placeOfIssue1 = object.placeOfIssue1;
		this.placeCountryOfIssue1 = object.placeCountryOfIssue1;
		this.countryOfBirth1 = object.countryOfBirth1;
		this.dateOfBirth1 = object.dateOfBirth1;
		this.currentNationality1 = object.currentNationality1;
		this.previousNationality1 = object.previousNationality1;
		this.foreignPassport1 = object.foreignPassport1;
		this.isResidentOfUAE1 = object.isResidentOfUAE1;
		this.uidNumber1 = object.uidNumber1;
		this.emiratesIdNumber1 = object.emiratesIdNumber1;
		this.fileNumber1 = object.fileNumber1;
		this.visitOrResidLast5Years1 = object.visitOrResidLast5Years1;
		this.uidNumber5Years1 = object.uidNumber5Years1;
		this.addressLine11 = object.addressLine11;
		this.addressLine21 = object.addressLine21;
		this.poBox1 = object.poBox1;
		this.postalCode1 = object.postalCode1;
		this.city1 = object.city1;
		this.state1 = object.state1;
		this.country1 = object.country1;
		this.fatherFirstName1 = object.fatherFirstName1;
		this.fatherMiddleName1 = object.fatherMiddleName1;
		this.fatherLastName1 = object.fatherLastName1;
		this.generalManagerName1 = object.generalManagerName1;
		this.generalManagerSignature1 = object.generalManagerSignature1;
		
		this.role2 = object.role2;
		this.shares2 = object.shares2;
		this.gender2 = object.gender2;
		this.salutation2 = object.salutation2;
		this.mobilePhone2 = object.mobilePhone2;
		this.passportNumber2 = object.passportNumber2;
		this.passportIssueDate2 = object.passportIssueDate2;
		this.passportExpiryDate2 = object.passportExpiryDate2;
		this.placeOfIssue2 = object.placeOfIssue2;
		this.placeCountryOfIssue2 = object.placeCountryOfIssue2;
		this.countryOfBirth2 = object.countryOfBirth2;
		this.dateOfBirth2 = object.dateOfBirth2;
		this.currentNationality2 = object.currentNationality2;
		this.previousNationality2 = object.previousNationality2;
		this.foreignPassport2 = object.foreignPassport2;
		this.isResidentOfUAE2 = object.isResidentOfUAE2;
		this.uidNumber2 = object.uidNumber2;
		this.emiratesIdNumber2 = object.emiratesIdNumber2;
		this.fileNumber2 = object.fileNumber2;
		this.visitOrResidLast5Years2 = object.visitOrResidLast5Years2;
		this.uidNumber5Years2 = object.uidNumber5Years2;
		this.addressLine12 = object.addressLine12;
		this.addressLine22 = object.addressLine22;
		this.poBox2 = object.poBox2;
		this.postalCode2 = object.postalCode2;
		this.city2 = object.city2;
		this.state2 = object.state2;
		this.country2 = object.country2;
		this.fatherFirstName2 = object.fatherFirstName2;
		this.fatherMiddleName2 = object.fatherMiddleName2;
		this.fatherLastName2 = object.fatherLastName2;
		this.generalManagerName2 = object.generalManagerName2;
		this.generalManagerSignature2 = object.generalManagerSignature2;

		this.role3 = object.role3;
		this.shares3 = object.shares3;
		this.gender3 = object.gender3;
		this.salutation3 = object.salutation3;
		this.mobilePhone3 = object.mobilePhone3;
		this.passportNumber3 = object.passportNumber3;
		this.passportIssueDate3 = object.passportIssueDate3;
		this.passportExpiryDate3 = object.passportExpiryDate3;
		this.placeOfIssue3 = object.placeOfIssue3;
		this.placeCountryOfIssue3 = object.placeCountryOfIssue3;
		this.countryOfBirth3 = object.countryOfBirth3;
		this.dateOfBirth3 = object.dateOfBirth3;
		this.currentNationality3 = object.currentNationality3;
		this.previousNationality3 = object.previousNationality3;
		this.foreignPassport3 = object.foreignPassport3;
		this.isResidentOfUAE3 = object.isResidentOfUAE3;
		this.uidNumber3 = object.uidNumber3;
		this.emiratesIdNumber3 = object.emiratesIdNumber3;
		this.fileNumber3 = object.fileNumber3;
		this.visitOrResidLast5Years3 = object.visitOrResidLast5Years3;
		this.uidNumber5Years3 = object.uidNumber5Years3;
		this.addressLine13 = object.addressLine13;
		this.addressLine23 = object.addressLine23;
		this.poBox3 = object.poBox3;
		this.postalCode3 = object.postalCode3;
		this.city3 = object.city3;
		this.state3 = object.state3;
		this.country3 = object.country3;
		this.fatherFirstName3 = object.fatherFirstName3;
		this.fatherMiddleName3 = object.fatherMiddleName3;
		this.fatherLastName3 = object.fatherLastName3;
		this.generalManagerName3 = object.generalManagerName3;
		this.generalManagerSignature3 = object.generalManagerSignature3;

		this.role4 = object.role4;
		this.shares4 = object.shares4;
		this.gender4 = object.gender4;
		this.salutation4 = object.salutation4;
		this.mobilePhone4 = object.mobilePhone4;
		this.passportNumber4 = object.passportNumber4;
		this.passportIssueDate4 = object.passportIssueDate4;
		this.passportExpiryDate4 = object.passportExpiryDate4;
		this.placeOfIssue4 = object.placeOfIssue4;
		this.placeCountryOfIssue4 = object.placeCountryOfIssue4;
		this.countryOfBirth4 = object.countryOfBirth4;
		this.dateOfBirth4 = object.dateOfBirth4;
		this.currentNationality4 = object.currentNationality4;
		this.previousNationality4 = object.previousNationality4;
		this.foreignPassport4 = object.foreignPassport4;
		this.isResidentOfUAE4 = object.isResidentOfUAE4;
		this.uidNumber4 = object.uidNumber4;
		this.emiratesIdNumber4 = object.emiratesIdNumber4;
		this.fileNumber4 = object.fileNumber4;
		this.visitOrResidLast5Years4 = object.visitOrResidLast5Years4;
		this.uidNumber5Years4 = object.uidNumber5Years4;
		this.addressLine14 = object.addressLine14;
		this.addressLine24 = object.addressLine24;
		this.poBox4 = object.poBox4;
		this.postalCode4 = object.postalCode4;
		this.city4 = object.city4;
		this.state4 = object.state4;
		this.country4 = object.country4;
		this.fatherFirstName4 = object.fatherFirstName4;
		this.fatherMiddleName4 = object.fatherMiddleName4;
		this.fatherLastName4 = object.fatherLastName4;
		this.generalManagerName4 = object.generalManagerName4;
		this.generalManagerSignature4 = object.generalManagerSignature4;

		this.role5 = object.role5;
		this.shares5 = object.shares5;
		this.gender5 = object.gender5;
		this.salutation5 = object.salutation5;
		this.mobilePhone5 = object.mobilePhone5;
		this.passportNumber5 = object.passportNumber5;
		this.passportIssueDate5 = object.passportIssueDate5;
		this.passportExpiryDate5 = object.passportExpiryDate5;
		this.placeOfIssue5 = object.placeOfIssue5;
		this.placeCountryOfIssue5 = object.placeCountryOfIssue5;
		this.countryOfBirth5 = object.countryOfBirth5;
		this.dateOfBirth5 = object.dateOfBirth5;
		this.currentNationality5 = object.currentNationality5;
		this.previousNationality5 = object.previousNationality5;
		this.foreignPassport5 = object.foreignPassport5;
		this.isResidentOfUAE5 = object.isResidentOfUAE5;
		this.uidNumber5 = object.uidNumber5;
		this.emiratesIdNumber5 = object.emiratesIdNumber5;
		this.fileNumber5 = object.fileNumber5;
		this.visitOrResidLast5Years5 = object.visitOrResidLast5Years5;
		this.uidNumber5Years5 = object.uidNumber5Years5;
		this.addressLine15 = object.addressLine15;
		this.addressLine25 = object.addressLine25;
		this.poBox5 = object.poBox5;
		this.postalCode5 = object.postalCode5;
		this.city5 = object.city5;
		this.state5 = object.state5;
		this.country5 = object.country5;
		this.fatherFirstName5 = object.fatherFirstName5;
		this.fatherMiddleName5 = object.fatherMiddleName5;
		this.fatherLastName5 = object.fatherLastName5;
		this.generalManagerName5 = object.generalManagerName5;
		this.generalManagerSignature5 = object.generalManagerSignature5;
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

	@ApiProperty()
	partnerName: string;

	@ApiProperty()
	applicationType: string;

	@ApiProperty()
	companyName: string;

	@ApiProperty()
	countryOfRegistration: string;

	@ApiProperty()
	addressOfParentCompany: string;

	@ApiProperty()
	enCompanyName1: string;

	@ApiProperty()
	enCompanyName2: string;

	@ApiProperty()
	enCompanyName3: string;

	@ApiProperty()
	franchisee: string;

	@ApiProperty()
	licenseType: string;

	@ApiProperty()
	visaPackage: string;

	@ApiProperty()
	establishmentCard: string;

	@ApiProperty()
	activityNumber1: string;

	@ApiProperty()
	activityName1: string;

	@ApiProperty()
	activityNumber2: string;

	@ApiProperty()
	activityName2: string;

	@ApiProperty()
	activityNumber3: string;

	@ApiProperty()
	activityName3: string;

	@ApiProperty()
	activityNumber4: string;

	@ApiProperty()
	activityName4: string;

	@ApiProperty()
	shareholdingType: string;

	@ApiProperty()
	proposedShareCaptial: string;

	@ApiProperty()
	shareValue: string;

	@ApiProperty()
	totalNumberOfShares: string;

	@ApiProperty()
	generalManagerName: string;

	@ApiProperty()
	generalManagerSignature: string;

	@ApiProperty()
	terms: string;

	@ApiProperty()
	tradeName: string;

	@ApiProperty()
	role1: string;

	@ApiProperty()
	shares1: string;

	@ApiProperty()
	gender1: string;

	@ApiProperty()
	salutation1: string;

	@ApiProperty()
	mobilePhone1: string;

	@ApiProperty()
	passportNumber1: string;

	@ApiProperty()
	passportIssueDate1: Date;

	@ApiProperty()
	passportExpiryDate1: Date;

	@ApiProperty()
	placeOfIssue1: string;

	@ApiProperty()
	placeCountryOfIssue1: string;

	@ApiProperty()
	countryOfBirth1: string;

	@ApiProperty()
	dateOfBirth1: Date;

	@ApiProperty()
	currentNationality1: string;

	@ApiProperty()
	previousNationality1: string;

	@ApiProperty()
	foreignPassport1: string;

	@ApiProperty()
	isResidentOfUAE1: string;

	@ApiProperty()
	uidNumber1: string;

	@ApiProperty()
	emiratesIdNumber1: string;

	@ApiProperty()
	fileNumber1: string;

	@ApiProperty()
	visitOrResidLast5Years1: string;

	@ApiProperty()
	uidNumber5Years1: string;

	@ApiProperty()
	addressLine11: string;

	@ApiProperty()
	addressLine21: string;

	@ApiProperty()
	poBox1: string;

	@ApiProperty()
	postalCode1: string;

	@ApiProperty()
	city1: string;

	@ApiProperty()
	state1: string;

	@ApiProperty()
	country1: string;

	@ApiProperty()
	fatherFirstName1: string;

	@ApiProperty()
	fatherMiddleName1: string;

	@ApiProperty()
	fatherLastName1: string;

	@ApiProperty()
	generalManagerName1: string;

	@ApiProperty()
	generalManagerSignature1: string;

	
	@ApiProperty()
	role2: string;

	@ApiProperty()
	shares2: string;

	@ApiProperty()
	gender2: string;

	@ApiProperty()
	salutation2: string;

	@ApiProperty()
	mobilePhone2: string;

	@ApiProperty()
	passportNumber2: string;

	@ApiProperty()
	passportIssueDate2: Date;

	@ApiProperty()
	passportExpiryDate2: Date;

	@ApiProperty()
	placeOfIssue2: string;

	@ApiProperty()
	placeCountryOfIssue2: string;

	@ApiProperty()
	countryOfBirth2: string;

	@ApiProperty()
	dateOfBirth2: Date;

	@ApiProperty()
	currentNationality2: string;

	@ApiProperty()
	previousNationality2: string;

	@ApiProperty()
	foreignPassport2: string;

	@ApiProperty()
	isResidentOfUAE2: string;

	@ApiProperty()
	uidNumber2: string;

	@ApiProperty()
	emiratesIdNumber2: string;

	@ApiProperty()
	fileNumber2: string;

	@ApiProperty()
	visitOrResidLast5Years2: string;

	@ApiProperty()
	uidNumber5Years2: string;
	
	@ApiProperty()
	addressLine12: string;

	@ApiProperty()
	addressLine22: string;

	@ApiProperty()
	poBox2: string;

	@ApiProperty()
	postalCode2: string;

	@ApiProperty()
	city2: string;

	@ApiProperty()
	state2: string;

	@ApiProperty()
	country2: string;

	@ApiProperty()
	fatherFirstName2: string;

	@ApiProperty()
	fatherMiddleName2: string;

	@ApiProperty()
	fatherLastName2: string;

	@ApiProperty()
	generalManagerName2: string;

	@ApiProperty()
	generalManagerSignature2: string;


	@ApiProperty()
	role3: string;

	@ApiProperty()
	shares3: string;

	@ApiProperty()
	gender3: string;

	@ApiProperty()
	salutation3: string;

	@ApiProperty()
	mobilePhone3: string;

	@ApiProperty()
	passportNumber3: string;

	@ApiProperty()
	passportIssueDate3: Date;

	@ApiProperty()
	passportExpiryDate3: Date;

	@ApiProperty()
	placeOfIssue3: string;

	@ApiProperty()
	placeCountryOfIssue3: string;

	@ApiProperty()
	countryOfBirth3: string;

	@ApiProperty()
	dateOfBirth3: Date;

	@ApiProperty()
	currentNationality3: string;

	@ApiProperty()
	previousNationality3: string;

	@ApiProperty()
	foreignPassport3: string;

	@ApiProperty()
	isResidentOfUAE3: string;

	@ApiProperty()
	uidNumber3: string;

	@ApiProperty()
	emiratesIdNumber3: string;

	@ApiProperty()
	fileNumber3: string;

	@ApiProperty()
	visitOrResidLast5Years3: string;

	@ApiProperty()
	uidNumber5Years3: string;
	
	@ApiProperty()
	addressLine13: string;

	@ApiProperty()
	addressLine23: string;

	@ApiProperty()
	poBox3: string;

	@ApiProperty()
	postalCode3: string;

	@ApiProperty()
	city3: string;

	@ApiProperty()
	state3: string;

	@ApiProperty()
	country3: string;

	@ApiProperty()
	fatherFirstName3: string;

	@ApiProperty()
	fatherMiddleName3: string;

	@ApiProperty()
	fatherLastName3: string;

	@ApiProperty()
	generalManagerName3: string;

	@ApiProperty()
	generalManagerSignature3: string;


	@ApiProperty()
	role4: string;

	@ApiProperty()
	shares4: string;

	@ApiProperty()
	gender4: string;

	@ApiProperty()
	salutation4: string;

	@ApiProperty()
	mobilePhone4: string;

	@ApiProperty()
	passportNumber4: string;

	@ApiProperty()
	passportIssueDate4: Date;

	@ApiProperty()
	passportExpiryDate4: Date;

	@ApiProperty()
	placeOfIssue4: string;

	@ApiProperty()
	placeCountryOfIssue4: string;

	@ApiProperty()
	countryOfBirth4: string;

	@ApiProperty()
	dateOfBirth4: Date;

	@ApiProperty()
	currentNationality4: string;

	@ApiProperty()
	previousNationality4: string;

	@ApiProperty()
	foreignPassport4: string;

	@ApiProperty()
	isResidentOfUAE4: string;

	@ApiProperty()
	uidNumber4: string;

	@ApiProperty()
	emiratesIdNumber4: string;

	@ApiProperty()
	fileNumber4: string;

	@ApiProperty()
	visitOrResidLast5Years4: string;

	@ApiProperty()
	uidNumber5Years4: string;
	
	@ApiProperty()
	addressLine14: string;

	@ApiProperty()
	addressLine24: string;

	@ApiProperty()
	poBox4: string;

	@ApiProperty()
	postalCode4: string;

	@ApiProperty()
	city4: string;

	@ApiProperty()
	state4: string;

	@ApiProperty()
	country4: string;

	@ApiProperty()
	fatherFirstName4: string;

	@ApiProperty()
	fatherMiddleName4: string;

	@ApiProperty()
	fatherLastName4: string;

	@ApiProperty()
	generalManagerName4: string;

	@ApiProperty()
	generalManagerSignature4: string;


	@ApiProperty()
	role5: string;

	@ApiProperty()
	shares5: string;

	@ApiProperty()
	gender5: string;

	@ApiProperty()
	salutation5: string;

	@ApiProperty()
	mobilePhone5: string;

	@ApiProperty()
	passportNumber5: string;

	@ApiProperty()
	passportIssueDate5: Date;

	@ApiProperty()
	passportExpiryDate5: Date;

	@ApiProperty()
	placeOfIssue5: string;

	@ApiProperty()
	placeCountryOfIssue5: string;

	@ApiProperty()
	countryOfBirth5: string;

	@ApiProperty()
	dateOfBirth5: Date;

	@ApiProperty()
	currentNationality5: string;

	@ApiProperty()
	previousNationality5: string;

	@ApiProperty()
	foreignPassport5: string;

	@ApiProperty()
	isResidentOfUAE5: string;

	@ApiProperty()
	uidNumber5: string;

	@ApiProperty()
	emiratesIdNumber5: string;

	@ApiProperty()
	fileNumber5: string;

	@ApiProperty()
	visitOrResidLast5Years5: string;

	@ApiProperty()
	uidNumber5Years5: string;
	
	@ApiProperty()
	addressLine15: string;

	@ApiProperty()
	addressLine25: string;

	@ApiProperty()
	poBox5: string;

	@ApiProperty()
	postalCode5: string;

	@ApiProperty()
	city5: string;

	@ApiProperty()
	state5: string;

	@ApiProperty()
	country5: string;

	@ApiProperty()
	fatherFirstName5: string;

	@ApiProperty()
	fatherMiddleName5: string;

	@ApiProperty()
	fatherLastName5: string;

	@ApiProperty()
	generalManagerName5: string;

	@ApiProperty()
	generalManagerSignature5: string;
}
export class VideoInterface {
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
	fileUrl: string;

	@ApiProperty()
	applicationDate: Date;
}
