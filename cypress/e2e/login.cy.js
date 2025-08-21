import { loginpage } from "../pages/login";

describe("Login with TOTP", () => {
  beforeEach(() => {
    cy.visit("https://esports.byteperks.com/login");
  });
  const tkn = new loginpage();
  it("should login using TOTP code", () => {
    tkn.clickToLogin();
  });
});
