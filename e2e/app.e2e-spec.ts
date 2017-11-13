import { ColaboradoresPage } from './app.po';

describe('colaboradores App', () => {
  let page: ColaboradoresPage;

  beforeEach(() => {
    page = new ColaboradoresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
