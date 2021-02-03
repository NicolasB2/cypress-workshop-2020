export class SummaryStepPage{

  private proceedToCheckoutButtonSelector: string;

  constructor() {
    this.proceedToCheckoutButtonSelector = '.cart_navigation span';
  }

  public proceedToCheckout() {
    cy.get(this.proceedToCheckoutButtonSelector).click();
  }
}
