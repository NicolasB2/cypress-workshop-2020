export class ProductListPage{

  private productListSelector: string;
  private addToCartButtonSelector: string;

  constructor() {
    this.productListSelector = '.product_list';
    this.addToCartButtonSelector = '.ajax_add_to_cart_button.btn.btn-default';
  }

  public selectProduct(productName:string) {
    cy.get(this.productListSelector)
      .find('.product-name')
      .contains(productName)
      .first()
      .get(this.addToCartButtonSelector)
      .click();
  }
}
