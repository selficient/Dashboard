import { SelficientDashboardPage } from './app.po';

describe('selficient-dashboard App', () => {
  let page: SelficientDashboardPage;

  beforeEach(() => {
    page = new SelficientDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
