export class SignInStepPage{

  private emailSelector: string;
  private passwordSelector: string;
  private siginButtonSelector: string;

  constructor() {
    this.emailSelector = '#email';
    this.passwordSelector = '#passwd';
    this.siginButtonSelector = '#SubmitLogin > span';
  }

  public login(email:string, password:string) {
    cy.get(this.emailSelector).type(email);
    cy.get(this.passwordSelector).type(password);
    cy.get(this.siginButtonSelector).click();
  }
}
