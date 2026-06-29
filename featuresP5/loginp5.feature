
Feature: FB login feature 
We need to validate login test cases
@reg
Scenario: Validate the Login testcasess with valid username and password 

Given user should be in login page
When user enters valid username"Tester15234@gmail.com"
And user enters  valid password"P11233"
Then click on login button
Then verify the error messsage

Scenario Outline: Validate the login Functonality with Valid username and password 

Given user should be in login page
When user enters valid multipleusernames"<username>"
And user enters valid multiplepasswords"<password>"
Then click on login button

Examples:
  |username | password|
  |Tester1@gmail.com|P11233|
  |sandeep@gmail.com|PW1224|
  |nareshit@gmail.com|PW1224|