export class OrderSummaryPage {
  private confirmationLabelSelector: string;

  constructor() {
    this.confirmationLabelSelector = '.cheque-indent > .dark';
  }

  public getOrderTitle(): Cypress.Chainable {
    return cy.get(this.confirmationLabelSelector);
  }
}
