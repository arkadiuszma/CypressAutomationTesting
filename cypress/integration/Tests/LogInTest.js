/// <reference types="cypress" />

import LoginPage from "../../fixtures/PageObjects/LoginPage.js";

describe ('Login user with valid and invalid data, recover user password', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    const page = new LoginPage();
    const headingTitle = 'Already registered?';
    const email = 'tester@example.pl';
    const password = 'Tester';
    const emailTitle = 'Email address';
    const passwordTitle = 'Password';
    const submitBtnTitle = 'Sign in';
    const helloTitle = 'Welcome to your account';
    const invalidAuthorization = 'Authentication failed';
    const recoverTitle = 'Forgot your password?';
    const messageSendAlert = 'A confirmation email has been sent to your address';

    it('Valid registration test', () => {
        page.GoToLoginPage(headingTitle)
            .LogIn(email, password, emailTitle, passwordTitle)
            .SubmitLogIn(submitBtnTitle)
            .MyPageAssert(helloTitle)
            .Logout();
    })
    it('Invalid email registration test', () => {
        page.GoToLoginPage(headingTitle)
            .LogIn(email + '1234', password, emailTitle, passwordTitle)
            .SubmitLogIn(submitBtnTitle)
            .CheckError(invalidAuthorization);
    })
    it('Recover password', ()=> {
        page.GoToLoginPage(headingTitle)
            .RecoverPassword(recoverTitle, recoverTitle, emailTitle, email)
            .CheckSendMessageAlert(messageSendAlert);
    })
})