import { PersonalInformation } from '../page';

describe('Given the tutorial  page', () => {

  before(() => {
    cy.visit('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });

  describe('When fill the form', () => {
    const personalInformationPage: PersonalInformation = new PersonalInformation();

    before(() => {
      const userData = {
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands'],
      };
      personalInformationPage.fillForm(userData);
    });

    it('Then should be a title', () => {
      personalInformationPage.getCurrentPageTitle().should('have.text', 'Selenium - Automation Practice Form');
    });
  });
});
