export class BankPaymentPage{

  private confirmOrderSelector: string;

  constructor() {
    this.confirmOrderSelector = '#cart_navigation > .button > span';
  }

  public confirmOrder() {
    cy.get(this.confirmOrderSelector).click();
  }
}
