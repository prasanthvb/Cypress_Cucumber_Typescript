/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/// <reference types="Cypress" />
import { Given , When, Then} from "cypress-cucumber-preprocessor/steps";
const url = "http://automationpractice.com/";
Given(/I open home page/, () => {
  cy.visit(url);
});

When(/I click on Sign in link/, () => {
  cy.get("header#header div.header_user_info > a").click();
});

Then(/User redirects to Index page/, () => {
  cy.title().should("eq", "Login - My Store");
});

When(/I click on Sign in button/, () => {
  cy.get("#SubmitLogin > span").click();
});
Then(/An email address required./, () => {
  cy.get("div#center_column li").should(
    "have.text",
    "An email address required."
  );
});
