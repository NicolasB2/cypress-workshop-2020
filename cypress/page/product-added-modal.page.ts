export class ProductAddedModalPage{

  private proceedToCheckoutSelector: string;

  constructor () {
    this.proceedToCheckoutSelector = 'a[title="Proceed to checkout"]';
  }

  public proceedToCheckout() {
    cy.get(this.proceedToCheckoutSelector).click();
  }
}
