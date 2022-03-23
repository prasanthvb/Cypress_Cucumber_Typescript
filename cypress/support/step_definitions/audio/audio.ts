/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/// <reference types="Cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps';
import { getJwtToken } from '../../../Utility';


Given(/Get access token using Post call/, async function() {
getJwtToken();
let options = {
      url: 'URL',
      headers: {'token': Cypress.env('token')}
    }
    cy.visit(options);
})
