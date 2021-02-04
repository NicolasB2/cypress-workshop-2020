export class PaymentStepPage{

  private payByBankWireSelector: string;

  constructor() {
    this.payByBankWireSelector = '[title="Pay by bank wire"]';
  }
  public payByBankWire() {
    cy.get(this.payByBankWireSelector).click();
  }
}
