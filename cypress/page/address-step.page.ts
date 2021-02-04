export class AddressStepPage {

  private proceedToCheckoutSelector: string;

  constructor() {
    this.proceedToCheckoutSelector = '.cart_navigation > .button > span';
  }

  public proceedToCheckout() {
    cy.get(this.proceedToCheckoutSelector).click();
  }
}
