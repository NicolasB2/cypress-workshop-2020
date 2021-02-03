export class MenuContentPage {
  private tShirtMenuSelector: string;

  constructor () {
    this.tShirtMenuSelector = '#block_top_menu > ul > li:nth-child(3) > a';
  }

  public goToTShirtMenu() {
    cy.get(this.tShirtMenuSelector).click();
  }
}
