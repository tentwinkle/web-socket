import { WebSocketClientPage } from './app.po';

describe('web-socket-client App', function() {
  let page: WebSocketClientPage;

  beforeEach(() => {
    page = new WebSocketClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
