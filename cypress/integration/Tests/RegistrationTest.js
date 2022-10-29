/// <reference types="cypress" />

import RegisterPage from "../../fixtures/PageObjects/RegisterPage.js";
import RegisterData from "../../fixtures/Data/RegistrationData.js";

describe ('Register new user and checking communicates with wrong data', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    const page = new RegisterPage();
    const user = new RegisterData();
    const registerAssertion = 'Create an account';
    const headingTitle = 'Your personal information';
    const firstNameTitle = 'First name';
    const lastNameTitle = 'Last name';
    const passwordTitle = 'Password';
    const dateOfBirthTitle = 'Date of Birth';
    const addressTitle = 'Address';
    const cityTitle = 'City';
    const stateTitle = 'State';
    const zipTitle = 'Zip/Postal Code';
    const phoneTitle = 'Mobile phone';
    const logInTitle = 'Welcome to your account.';
    const invalidEmailAssert = 'Invalid email address.';
    const invalidAllInputs = 'There are 8 errors';

    it('Valid registration test', () => {
        page.GoToRegisterPage(registerAssertion)
            .InputEmail(user.userEmail(), headingTitle)
            .ChooseSex(user.userGender())
            .InputCustomerName(firstNameTitle, user.userName())
            .InputLastName(lastNameTitle, user.userLastName())
            .InputPassword(passwordTitle, user.userPassword())
            .SelectDayOfBirth(dateOfBirthTitle, user.setDay(), user.setMonth(), user.setYear())
            .CheckAgreement(user.userAgreements(), user.userAgreements())
            .InputAddress(addressTitle, user.userStreet())
            .InputCity(cityTitle, user.userCity())
            .SelectState(stateTitle, user.userState())
            .InputPostcode(zipTitle, user.userPostCode())
            .InputPhoneNumber(phoneTitle, user.userPhone())
            .SubmitRegistration()
            .LogInPageAssertion(logInTitle);

    })
    it('Logout user test', () => { 
        page.GoToRegisterPage(registerAssertion)
            .InputEmail(user.userEmail(), headingTitle)
            .ChooseSex(user.userGender())
            .InputCustomerName(firstNameTitle, user.userName())
            .InputLastName(lastNameTitle, user.userLastName())
            .InputPassword(passwordTitle, user.userPassword())
            .SelectDayOfBirth(dateOfBirthTitle, user.setDay(), user.setMonth(), user.setYear())
            .CheckAgreement(user.userAgreements(), user.userAgreements())
            .InputAddress(addressTitle, user.userStreet())
            .InputCity(cityTitle, user.userCity())
            .SelectState(stateTitle, user.userState())
            .InputPostcode(zipTitle, user.userPostCode())
            .InputPhoneNumber(phoneTitle, user.userPhone())
            .SubmitRegistration()
            .LogInPageAssertion(logInTitle)
            .Logout();
    })
    it('Invalid e-mail test', () => {
        page.GoToRegisterPage(registerAssertion)
            .InvalidInputWrongEmailFormat(user.invalidData(), invalidEmailAssert);
    })
    it('Submit without write form attributes', () => {
        page.GoToRegisterPage(registerAssertion)
            .InputEmail(user.userEmail(), headingTitle)
            .SubmitRegistration()
            .LogWithIncorectDataAlertAssertion(invalidAllInputs);
    })
    // it('Submit without write last name', () => {
    //    
    // })
})