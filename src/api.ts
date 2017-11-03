import { HttpClient } from 'aurelia-fetch-client';
const client = new HttpClient();

export default class API {
  getCompanies() {
    return client.fetch('https://api.tatts.com/svc/sales/vmax/web/data/lotto/companies')
      .then(res => res.json())
      .then(data => data.Companies)
  }
};