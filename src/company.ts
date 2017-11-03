export class Company {
  id: string;
  displayName: string;
  description: string;
  logoUrl: string;
  
  constructor(company) {
    this.id = company.CompanyId;
    this.displayName = company.CompanyDisplayName;
    this.description = company.CompanyDescription;
    this.logoUrl = company.CompanyLogoUrl;
  }
}