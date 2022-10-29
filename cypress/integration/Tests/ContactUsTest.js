/// <reference types="cypress" />

import ContactUsPage from "../../fixtures/PageObjects/ContactUsPage.js";

describe ('Check all possibilities with sending form to system administration', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    const assertTitle = 'Contact us';
    const headingTitle = 'Customer service - Contact us';
    const subject = 'Customer service';
    let email = 'example@email.com';
    let orderNo = Math.floor(Math.random()*100);
    const filePath = '..//fixtures//ImageTest.png';
    let message = 'Something You want to tell';
    const validAlert = 'Your message has been successfully sent to our team.';
    const invalidAlertMessage = 'The message cannot be blank';
    const invalidEmailAlert = 'Invalid email address.';
    const invalidSubjectAlert = 'Please select a subject from the list provided.';

    it('Correct form', () => {
        const page = new ContactUsPage();
        page.getContactUsFormPage(assertTitle)
            .checkHeadingTitle(headingTitle)
            .chooseSubject(subject)
            .inputEmail(email)
            .inputOrderNumber(orderNo)
            .fileUpload(filePath)
            .inputMessage(message)
            .sendForm()
            .getValidAlert(validAlert);
    })
    it('Form without message', () => {
        const page = new ContactUsPage();
        page.getContactUsFormPage(assertTitle)
            .checkHeadingTitle(headingTitle)
            .chooseSubject(subject)
            .inputEmail(email)
            .inputOrderNumber(orderNo)
            .fileUpload(filePath)
            .sendForm()
            .getInvalidAlert(invalidAlertMessage);
    })

    it('Form without email', () => {
        const page = new ContactUsPage();
        page.getContactUsFormPage(assertTitle)
            .checkHeadingTitle(headingTitle)
            .chooseSubject(subject)
            .inputOrderNumber(orderNo)
            .fileUpload(filePath)
            .inputMessage(message)
            .sendForm()
            .getInvalidAlert(invalidEmailAlert);
    })

    it('Form without choosing subject', () => {
        const page = new ContactUsPage();
        page.getContactUsFormPage(assertTitle)
            .checkHeadingTitle(headingTitle)
            .inputEmail(email)
            .inputOrderNumber(orderNo)
            .fileUpload(filePath)
            .inputMessage(message)
            .sendForm()
            .getInvalidAlert(invalidSubjectAlert);
    })
})