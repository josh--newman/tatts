import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import API from '../../src/api';
import { Company } from '../../src/company';

const mockCompanies = [
  {
    CompanyId: "GoldenCasket",
    CompanyDisplayName: "Golden Casket",
    CompanyDescription: "QLD Residents",
    CompanyLogoUrl: "http://tim.media.tatts.com/TattsServices/Lotto/Companies/GoldenCasket_v1.png"
  },
  {
    CompanyId: "NSWLotteries",
    CompanyDisplayName: "NSW Lotteries",
    CompanyDescription: "NSW Residents",
    CompanyLogoUrl: "http://tim.media.tatts.com/TattsServices/Lotto/Companies/NSWLotteries_v1.png"
  }
];

class MockAPI {
  companies;

  getCompanies() {
    return Promise.resolve(this.companies);
  }
}


describe('App', () => {
  let component;
  let api = new MockAPI();

  beforeEach(() => {
    api.companies = undefined;

    component = StageComponent
      .withResources('app')
      .inView('<app></app>');

    component.bootstrap(aurelia => {
      aurelia.use.standardConfiguration();

      aurelia.container.registerInstance(API, api);
    });
  });

  it('should render', done => {
    component.create(bootstrap).then(() => {
      expect(document.querySelector('.container')).toBeTruthy();
      done();
    });
  });

  it('should fetch list of companies', done => {
    api.companies = mockCompanies;
    component.create(bootstrap).then(() => {
      expect(component.viewModel.companies).toEqual(
        mockCompanies.map(c => new Company(c))
      );
      done();
    });
  });

  it('should render list of companies', done => {
    api.companies = mockCompanies;
    component.create(bootstrap).then(() => {
      const items = document.querySelectorAll('.list-item');
      expect(items.length).toEqual(2);
      done();
    });
  });

  it('should render an item', done => {
    api.companies = mockCompanies;
    component.create(bootstrap).then(() => {
      const company = document.querySelector('.list-item');
      const img = company.querySelector('img');
      expect(img.src).toEqual(mockCompanies[0].CompanyLogoUrl);
      const desc = company.querySelector('p');
      expect(desc.innerHTML).toEqual(mockCompanies[0].CompanyDescription);
      const arrow = company.querySelector('span');
      expect(arrow.innerHTML).toEqual('&gt;');
      done();
    });
  });

  afterEach(() => {
    component.dispose();
  });
});