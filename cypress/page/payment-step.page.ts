export class PaymentStepPage{

  private payByBankWireSelector: string;

  constructor() {
    this.payByBankWireSelector = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a';
  }
  public payByBankWire() {
    cy.get(this.payByBankWireSelector).click();
  }
}
