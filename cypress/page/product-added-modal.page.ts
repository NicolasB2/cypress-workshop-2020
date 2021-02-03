export class ProductAddedModalPage{

  private proceedToCheckoutSelector: string;

  constructor () {
    this.proceedToCheckoutSelector = '.button-container > .button-medium > span';
  }

  public proceedToCheckout() {
    cy.get(this.proceedToCheckoutSelector).click();
  }
}
