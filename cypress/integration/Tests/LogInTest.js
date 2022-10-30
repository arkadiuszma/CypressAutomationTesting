/// <reference types="cypress" />

import LoginPage from "../../fixtures/PageObjects/LoginPage.js";

describe ('Login user which have permission and checking validation communicates for trying to log in with wrong data', () => {
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
            .CheckError(invalidAuthorization) ;
    })
    // it ('Recover password', ()=> {
    //     page.GoToLoginPage(headingTitle)
    //         .
    // })
})