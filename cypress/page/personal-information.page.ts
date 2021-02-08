export class PersonalInformation {

  private firstNameField: string;
  private lastNameField: string;
  private sendButton: string;
  private pageTitle: string;
  private continentCombobox: string;
  private commandsListbox: string;

  constructor() {
    this.firstNameField = 'input[name="firstname"]';
    this.lastNameField = 'input[name="lastname"]';
    this.sendButton = 'input[name="submit"]';
    this.pageTitle = '.mui-col-md-6 > :nth-child(1)';
    this.continentCombobox = ':nth-child(9) > [width="65%"] > select';
    this.commandsListbox = ':nth-child(10) > [width="65%"] > select';
    this.sendButton = '[width="65%"] > button';
  }

  fillForm(userData:any) {
    cy.get(this.firstNameField).type(userData.firstName);
    cy.get(this.lastNameField).type(userData.lastName);
    this.getSexOption(userData.sex).check();
    this.getExperienceOption(userData.experience).check();
    this.getContinentsOption(userData.continent);

    for (const item of userData.profession) {
      this.getProfessionOption(item);
    }

    for (const item of userData.tools) {
      this.getToolsOption(item);
    }

    for (const item of userData.commands) {
      this.getCommands(userData.commands[0]);
    }

    cy.get(this.sendButton).click();
  }

  private getSexOption(name:string): Cypress.Chainable {
    return cy.get(`[value="${name}"]`);
  }

  private getExperienceOption(years: number): Cypress.Chainable {
    return cy.get(`[value="${years}"]`);
  }

  private getProfessionOption(prof: string): Cypress.Chainable {
    return cy.get(`[value="${prof}"]`).check();
  }

  private getToolsOption(tool: string): Cypress.Chainable {
    return cy.get(`[value="${tool}"]`).check();
  }

  private getContinentsOption(continents: string): Cypress.Chainable {
    return cy.get(this.continentCombobox).select(continents);
  }
  private getCommands(comands: string): Cypress.Chainable {
    return cy.get(this.commandsListbox).select(comands);
  }

  public getCurrentPageTitle(): Cypress.Chainable {
    return cy.get(this.pageTitle);
  }
}
