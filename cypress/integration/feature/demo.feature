Feature: Automation Practise Website
Sign in page functionality
  

  Scenario: Index page redirection
    Given I open home page
    When I click on Sign in link
    Then User redirects to Index page


  Scenario: Email Address Error message validation
    When I click on Sign in button
    Then An email address required.
