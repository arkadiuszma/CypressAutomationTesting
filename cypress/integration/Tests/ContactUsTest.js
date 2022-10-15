/// <reference types="cypress" />

import ContactUsPage from "..//PageObjects//ContactUsPage";

describe ('Check all possibilities with sending form to system administration', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('CorrectForm', () => {
        const page = new ContactUsPage();
        page.getContactUsFormPage('Contact us')
            .checkHeadingTitle('Customer service - Contact us')
            .chooseSubject('Customer service')
            .inputEmail('example@email.com')
            .inputOrderNumber('no_123')
            .fileUpload('..//fixtures//ImageTest.png')
            .inputMessage('Something You want to tell')
            .sendForm()
            .getValidAlert('Your message has been successfully sent to our team.');
    })
    it('FormWithoutMessage', () => {
        const page = new ContactUsPage();
        page.getContactUsFormPage('Contact us')
            .checkHeadingTitle('Customer service - Contact us')
            .chooseSubject('Customer service')
            .inputEmail('example@email.com')
            .inputOrderNumber('no_123')
            .fileUpload('..//fixtures//ImageTest.png')
            .sendForm()
            .getInvalidAlert('The message cannot be blank');
    })

    it('FormWithoutEmail', () => {
        const page = new ContactUsPage();
        page.getContactUsFormPage('Contact us')
            .checkHeadingTitle('Customer service - Contact us')
            .chooseSubject('Customer service')
            .inputOrderNumber('no_123')
            .fileUpload('..//fixtures//ImageTest.png')
            .inputMessage('Something You want to tell')
            .sendForm()
            .getInvalidAlert('Invalid email address')
    })

    it('FormWithoutChoosingSubject', () => {
        const page = new ContactUsPage();
        page.getContactUsFormPage('Contact us')
            .checkHeadingTitle('Customer service - Contact us')
            .inputEmail('example@email.com')
            .inputOrderNumber('no_123')
            .fileUpload('..//fixtures//ImageTest.png')
            .inputMessage('Something You want to tell')
            .sendForm()
            .getInvalidAlert('Please select a subject from the list provided.')
    })
})