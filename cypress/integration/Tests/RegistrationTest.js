/// <reference types="cypress" />

import RegisterPage from "..//PageObjects//RegisterPage.js";

describe ('Register new user and checking communicates with wrong data', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('Valid registration test', () => {
        const page = new RegisterPage();
        let number = Math.round(Math.random() * 10000);
        let month = Math.round(Math.random() * 12).toString();
        if (month === '0'){
            month = '1';
        }
        let day;
        if (month === '1' || '3' || '5' || '7' || '8' || '10' || '12'){
            day = Math.round(Math.random() * 31).toString();
        } 
        else if (month === '4' || '6' || '9' || '11'){
            day = Math.round(Math.random() * 30).toString();
        } 
        else {
            day = Math.round(Math.random() * 29).toString();
        }
        if (day === '0'){
            day = '1';
        }
        let year = Math.round(Math.random() * (2022 - 1900 +1) + 1900).toString();
        page.GoToRegisterPage('Create an account')
            .InputEmail('user' + number + '@example.com', 'Your personal information')
            .ChooseSex('male')
            .InputCustomerName('First name', 'John')
            .InputLastName('Last name', 'Blue')
            .InputPassword('Password', 'Tester123')
            .SelectDayOfBirth('Date of Birth', day, month, year)
            .CheckAgreement('yes','no')
            .InputAddress('Address', 'Long Street 32')
            .InputCity('City', 'New York')
            .SelectState('State', 'New York')
            .InputPostcode('Zip/Postal Code', '12432')
            .InputPhoneNumber('Mobile phone','432754213')
            .SubmitRegistration()
            .LogInPageAssertion('Welcome to your account.');

    })
    it('Logout user test', () => {
        const page = new RegisterPage();
        let number = Math.round(Math.random() * 10000);
        page.GoToRegisterPage('Create an account')
        .InputEmail('user' + number + '@example.com', 'Your personal information')
        .InputCustomerName('First name', 'John')
        .InputLastName('Last name', 'Blue')
        .InputPassword('Password', 'Tester123')
        .InputAddress('Address', 'Yelowside 542')
        .InputCity('City', 'New York')
        .SelectState('State', 'New York')
        .InputPostcode('Zip/Postal Code', '12432')
        .InputPhoneNumber('Mobile phone','432754213')
        .SubmitRegistration()
        .LogInPageAssertion('Welcome to your account.')
        .Logout();
    })
    it('Invalid e-mail test', () => {
        const page = new RegisterPage();
        page.GoToRegisterPage('Create an account')
            .InvalidInputWrongEmailFormat('wrong', 'Invalid email address.');
    })
    it('Submit without write form attributes', () => {
        const page = new RegisterPage();
        let number = Math.round(Math.random() * 10000);
        page.GoToRegisterPage('Create an account')
            .InputEmail('user' + number + '@example.com', 'Your personal information')
            .SubmitRegistration()
            .LogWithIncorectDataAlertAssertion('There are 8 errors');
    })
})