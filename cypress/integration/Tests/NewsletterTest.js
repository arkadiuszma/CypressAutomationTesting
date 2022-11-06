/// <reference types="cypress" />

import HomePage from "../../fixtures/PageObjects/HomePage.js";
import RegisterData from "../../fixtures/Data/RegistrationData.js";

describe ('Check all possibilities with sending form to system administration', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    const page = new HomePage();
    const data = new RegisterData();
    const emailSendAlert = 'You have successfully subscribed to this newsletter';
    const invalidEmail = 'a';
    const invalidEmailAlert = 'Invalid email address.';

    it('Valid email newsletter test', () => {
        page.GetNewsletter(data.userEmail())
            .CheckNewsletterAlert(emailSendAlert);
    })
    it('Invalid email newsletter test', () => {
        page.GetNewsletter(invalidEmail)
            .CheckNewsletterAlert(invalidEmailAlert);
    })
})