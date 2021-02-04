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

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage;
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('Then should be bought a t-shirt', () => {

    cy.visit('http://automationpractice.com/');

    menuContentPage.goToTShirtMenu();
    productListPage.selectProduct('Faded Short Sleeve T-shirts');

    productAddedModalPage.proceedToCheckout();
    summaryStepPage.proceedToCheckout();
    signInStepPage.login('testCypress@gmail.com', 'WorkshopProtractor');

    addressStepPage.proceedToCheckout();
    shippingStepPage.aceptTermsOfService();
    paymentStepPage.payByBankWire();
    bankPaymentPage.confirmOrder();

    orderSummaryPage.getOrderTitle().contains('Your order on My Store is complete.');
  });
});
