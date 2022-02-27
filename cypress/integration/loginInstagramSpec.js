/// <reference types= "cypress" />
//This function is to describe the test suite
describe("Instagram Login Test suite", function () {
  //This function is to describe the test case
  it('Instagram login', function () {
    //Visit instagram.
    cy.visit("https://www.instagram.com/");
    //Spy on the username input field.
    cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ")
      //Type your instagram username – change xxx to your ig username
      .type("Hadeoluwa");
    //Spy on the password field.
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ")
      //Type password change xxx to your ig password
      .type("Tomiwa");
    //Spy login button
    cy.get(".sqdOP > .qF0y9").click();
    //Inspect search box
    cy.get(".eyXLr")
      //Assert that the search box is visible
      .should("be.visible");
  });
})