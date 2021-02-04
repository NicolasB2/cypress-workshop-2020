export class AddressStepPage {

  private proceedToCheckoutSelector: string;

  constructor() {
    this.proceedToCheckoutSelector = '[name="processAddress"]';
  }

  public proceedToCheckout() {
    cy.get(this.proceedToCheckoutSelector).click();
  }
}
