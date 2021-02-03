export class OrderSummaryPage {
  private confirmationLabelSelector: string;

  constructor() {
    this.confirmationLabelSelector = '#center_column .dark';
  }

  public getOrderTitle(): Cypress.Chainable {
    return cy.get(this.confirmationLabelSelector);
  }
}
