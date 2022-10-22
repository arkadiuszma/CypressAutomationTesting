/// <reference types="cypress" />

import RegisterPage from "..//PageObjects//RegisterPage.js";

describe ('Register new user and checking communicates with wrong data', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('Valid registration test', () => {
        const page = new RegisterPage();
        let number = Math.random() * 10000;
        let day = Math.round(Math.random() * 31).toString();
        let month = Math.round(Math.random() * 12).toString();
        let year = Math.round(Math.random() * (2022 - 1900 +1) + 1900).toString();
        page.GoToRegisterPage('Create an account')
            .InputEmail('user' + number + '@example.com', 'Your personal information')
            .ChooseSex('male')
            .InputCustomerName('First name', 'John')
            .InputLastName('Last name', 'Blue')
            .InputPassword('Password', 'Tester123')
            .SelectDayOfBirth('Date of Birth', day, month, year)
            .InputAddress('Address', 'Long Street 32');

    })
})