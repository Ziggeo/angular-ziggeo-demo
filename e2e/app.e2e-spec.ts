import { HomePage } from './page-objects/home.po';
import { RecorderPage } from './page-objects/recorder.po';

describe('angular-ziggeo-demo home page loads', () => {
  const home = new HomePage();

  beforeAll(() => {
    home.navigateTo();
  });

  it('should display home page welcome message', () => {
    expect(home.getParagraphText()).toEqual('Home page');
  });
});

describe('angular-ziggeo-demo recorder page loads and does not lock protractor', () => {
  const home = new HomePage();
  const recorder = new RecorderPage();

  beforeAll(() => {
    recorder.navigateTo();
  });

  it('should display recorder page welcome message', () => {
    expect(recorder.getParagraphText()).toEqual('Home page');
  });

  describe('and the user clicks the home button', () => {
    beforeAll(() => {
      recorder.getHomeButton().click();
    });

    it('should display home page welcome message', () => {
      expect(home.getParagraphText()).toEqual('Home page');
    });
  });

  describe('and the user follows the player navbar link', () => {
    beforeAll(() => {
      home.getPlayerLink().click();
    });

    it('should display player page welcome message', () => {
      expect(home.getParagraphText()).toEqual('Player component');
    });
  });
});
