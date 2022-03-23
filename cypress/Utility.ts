/// <reference types='cypress' />

let jwt: string = '';
let jwtStatus: number = 0;

//This function is to get the JWT Token based on the client configuration values.
export async function getJwtToken(): Promise<string> {
  return new Promise(function (resolve) {
    cy.request({
      method: 'POST',
      url: Cypress.env('mm_auth'),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: {
        scope: Cypress.env('mm_scope'),
        client_id: Cypress.env('mm_client_id'),
        client_secret: Cypress.env('mm_client_secret'),
        partner_member_id: Cypress.env('mm_partner_member_id'),
        grant_type: Cypress.env('mm_grant_type'),
        username: Cypress.env('mm_username'),
        password: Cypress.env('mm_password'),
      },
    }).then((response) => {
      jwt = response.body.access_token;
     // cy.log(jwt)
      Cypress.env('token', jwt);
     // cy.log( Cypress.env('token'));
    });
  });
}
