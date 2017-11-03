import { inject } from 'aurelia-framework';
import { Company } from './company';
import API from './api';

@inject (API)
export class App {
  companies: Company[] = [];
  
  constructor(private api: API) {}

  created() {
    this.api.getCompanies()
      .then(companies =>
        this.companies = companies.map(c => new Company(c))
      ).catch(err => { throw new Error(err) });
  }
}
