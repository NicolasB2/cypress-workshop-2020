import {
  AddressStepPage,
  BankPaymentPage,
  MenuContentPage,
  OrderSummaryPage,
  PaymentStepPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  ShippingStepPage
} from '../page';

describe('Given the shopping page', () => {

  before(() => {
    cy.visit('http://automationpractice.com/');
  });

  describe('when buy a T-shirt', () => {
    before(() => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage;
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      menuContentPage.goToTShirtMenu();
      productListPage.selectProduct('Faded Short Sleeve T-shirts');
      productAddedModalPage.proceedToCheckout();
      summaryStepPage.proceedToCheckout();

      describe('and login in the page', () => {
        before(() => {
          const signInStepPage: SignInStepPage = new SignInStepPage();
          signInStepPage.login('testCypress@gmail.com', 'WorkshopProtractor');

          describe('and select the default address', () => {
            before(() => {
              const addressStepPage: AddressStepPage = new AddressStepPage();
              const shippingStepPage: ShippingStepPage = new ShippingStepPage();

              addressStepPage.proceedToCheckout();
              shippingStepPage.aceptTermsOfService();

              describe('and make the bank payment', () => {
                before(() => {
                  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
                  const paymentStepPage: PaymentStepPage = new PaymentStepPage();

                  paymentStepPage.payByBankWire();
                  bankPaymentPage.confirmOrder();
                });

                it('Then should be bought a t-shirt', () => {
                  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
                  orderSummaryPage.getOrderTitle().should('have.text', 'Your order on My Store is complete.');
                });
              });
            });
          });
        });
      });
    });
  });
});
