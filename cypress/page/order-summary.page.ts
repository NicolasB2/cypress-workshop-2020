export class OrderSummaryPage {
  private confirmationLabelSelector: string;

  constructor() {
    this.confirmationLabelSelector = '.cheque-indent';
  }

  public getOrderTitle(): Cypress.Chainable {
    return cy.get(this.confirmationLabelSelector);
  }
}
