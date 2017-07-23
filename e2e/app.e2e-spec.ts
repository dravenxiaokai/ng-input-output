import { NgInputOutputPage } from './app.po';

describe('ng-input-output App', () => {
  let page: NgInputOutputPage;

  beforeEach(() => {
    page = new NgInputOutputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
