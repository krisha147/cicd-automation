import { authenticator } from "otplib";

export class loginpage {
  secret = Cypress.env("TOTP_SECRET");
  token = authenticator.generate(this.secret);
  email = ".form > :nth-child(1) > .form-control-krafton";
  password = ".input-group > .form-control-krafton";
  loginbtn = ".form > :nth-child(4)";
  otp = ".form-control-krafton";
  verifybtn = ".form-btn-krafton";
  emailId = Cypress.env("EMAIL");
  pass = Cypress.env("PASSWORD");
  card = ":nth-child(1) > .card-body";

  clickToLogin = () => {
    cy.get(this.email).type(this.emailId);
    cy.get(this.password).type(this.pass);
    cy.get(this.loginbtn).should("have.text", "Login").click();
    cy.wait(3000);
    cy.get(this.otp).should("be.visible").type(this.token);
    cy.get(this.verifybtn).should("have.text", "Verify OTP").click();
    cy.get(this.card).should("be.visible");
  };
}
