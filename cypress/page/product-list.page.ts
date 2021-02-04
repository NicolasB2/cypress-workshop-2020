export class ProductListPage{
  private productListSelector: string;

  constructor() {
    this.productListSelector = '.product_list';
  }

  public selectProduct(productName:string) {
    cy.get(this.productListSelector)
      .find('.product-name')
      .contains(productName)
      .first()
      .get('.ajax_add_to_cart_button.btn.btn-default')
      .click();
  }
}
