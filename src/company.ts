import { bindable } from 'aurelia-framework';

export class Company {
  id: string;
  displayName: string;
  @bindable description: string;
  @bindable logoUrl: string;
  
  constructor(company) {
    this.id = company.CompanyId;
    this.displayName = company.CompanyDisplayName;
    this.description = company.CompanyDescription;
    this.logoUrl = company.CompanyLogoUrl;
  }
}