export class ShippingStepPage{

  private termsOfServiceCheckBoxSelector: string;
  private proceedToCheckoutSelector: string;

  constructor() {
    this.termsOfServiceCheckBoxSelector = '#cgv';
    this.proceedToCheckoutSelector = '.cart_navigation > .button > span';
  }
  public aceptTermsOfService() {
    cy.get(this.termsOfServiceCheckBoxSelector).check();
    cy.get(this.proceedToCheckoutSelector).click();
  }
}
