/// <reference types="cypress" />

import RegisterPage from "../../fixtures/PageObjects/RegisterPage.js";
import RegisterData from "../../fixtures/Data/RegistrationData.js";

describe ('Register new user and checking communicates with wrong or null data inputs', () => {
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
    const invalidLastName = 'lastname is required.';
    const invalidPhoneNumber = 'You must register at least one phone number.';
    const ivalidFirstName = 'firstname is required.';
    const invalidAddress = 'address1 is required.';
    const invalidCity = 'city is required';
    const invalidPostCode = "The Zip/Postal code you've entered is invalid. It must follow this format: 00000";
    const invalidState = 'This country requires you to choose a State';
    const invalidDataInFourFields = 'There are 4 errors';
    const invalidPassword = 'passwd is invalid.'

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
    it('Submit without write last name', () => {
        page.GoToRegisterPage(registerAssertion)
        .InputEmail(user.userEmail(), headingTitle)
        .ChooseSex(user.userGender())
        .InputCustomerName(firstNameTitle, user.userName())
        .InputPassword(passwordTitle, user.userPassword())
        .SelectDayOfBirth(dateOfBirthTitle, user.setDay(), user.setMonth(), user.setYear())
        .CheckAgreement(user.userAgreements(), user.userAgreements())
        .InputAddress(addressTitle, user.userStreet())
        .InputCity(cityTitle, user.userCity())
        .SelectState(stateTitle, user.userState())
        .InputPostcode(zipTitle, user.userPostCode())
        .InputPhoneNumber(phoneTitle, user.userPhone())
        .SubmitRegistration()
        .LogWithIncorectDataAlertAssertion(invalidLastName);
    })
    it('Submit without write last name', () => { 
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
            .SubmitRegistration()
            .LogWithIncorectDataAlertAssertion(invalidPhoneNumber);
    })
    it('Submit without write first name', () => { 
        page.GoToRegisterPage(registerAssertion)
            .InputEmail(user.userEmail(), headingTitle)
            .ChooseSex(user.userGender())
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
            .LogWithIncorectDataAlertAssertion(ivalidFirstName);
    })
    it('Submit without write adress', () => { 
        page.GoToRegisterPage(registerAssertion)
            .InputEmail(user.userEmail(), headingTitle)
            .ChooseSex(user.userGender())
            .InputCustomerName(firstNameTitle, user.userName())
            .InputLastName(lastNameTitle, user.userLastName())
            .InputPassword(passwordTitle, user.userPassword())
            .SelectDayOfBirth(dateOfBirthTitle, user.setDay(), user.setMonth(), user.setYear())
            .CheckAgreement(user.userAgreements(), user.userAgreements())
            .InputCity(cityTitle, user.userCity())
            .SelectState(stateTitle, user.userState())
            .InputPostcode(zipTitle, user.userPostCode())
            .InputPhoneNumber(phoneTitle, user.userPhone())
            .SubmitRegistration()
            .LogWithIncorectDataAlertAssertion(invalidAddress);
    })
    it('Submit without write city', () => { 
        page.GoToRegisterPage(registerAssertion)
            .InputEmail(user.userEmail(), headingTitle)
            .ChooseSex(user.userGender())
            .InputCustomerName(firstNameTitle, user.userName())
            .InputLastName(lastNameTitle, user.userLastName())
            .InputPassword(passwordTitle, user.userPassword())
            .SelectDayOfBirth(dateOfBirthTitle, user.setDay(), user.setMonth(), user.setYear())
            .CheckAgreement(user.userAgreements(), user.userAgreements())
            .InputAddress(addressTitle, user.userStreet())
            .SelectState(stateTitle, user.userState())
            .InputPostcode(zipTitle, user.userPostCode())
            .InputPhoneNumber(phoneTitle, user.userPhone())
            .SubmitRegistration()
            .LogWithIncorectDataAlertAssertion(invalidCity);
    })
    it('Submit without choose state', () => {
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
            .InputPostcode(zipTitle, user.userPostCode())
            .InputPhoneNumber(phoneTitle, user.userPhone())
            .SubmitRegistration()
            .LogWithIncorectDataAlertAssertion(invalidState);
    })
    it('Wrong form of postcode validation', () => {
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
            .InputPostcode(zipTitle, user.invalidData())
            .InputPhoneNumber(phoneTitle, user.userPhone())
            .SubmitRegistration()
            .LogWithIncorectDataAlertAssertion(invalidPostCode);
    })
    it('Wrong data in five inputs fields', () => {
        page.GoToRegisterPage(registerAssertion)
            .InputEmail(user.userEmail(), headingTitle)
            .ChooseSex(user.userGender())
            .InputCustomerName(firstNameTitle, user.invalidData())
            .InputLastName(lastNameTitle, user.invalidData())
            .InputPassword(passwordTitle, user.userPassword())
            .SelectDayOfBirth(dateOfBirthTitle, user.setDay(), user.setMonth(), user.setYear())
            .CheckAgreement(user.userAgreements(), user.userAgreements())
            .InputAddress(addressTitle, user.userStreet())
            .InputCity(cityTitle, user.invalidData())
            .SelectState(stateTitle, user.userState())
            .InputPostcode(zipTitle, user.invalidData())
            .InputPhoneNumber(phoneTitle, user.userPhone())
            .SubmitRegistration()
            .LogWithIncorectDataAlertAssertion(invalidDataInFourFields);
    })
    it('Wrong input in password field', () => {
        page.GoToRegisterPage(registerAssertion)
            .InputEmail(user.userEmail(), headingTitle)
            .ChooseSex(user.userGender())
            .InputCustomerName(firstNameTitle, user.userName())
            .InputLastName(lastNameTitle, user.userLastName())
            .InputPassword(passwordTitle, user.invalidData())
            .SelectDayOfBirth(dateOfBirthTitle, user.setDay(), user.setMonth(), user.setYear())
            .CheckAgreement(user.userAgreements(), user.userAgreements())
            .InputAddress(addressTitle, user.userStreet())
            .InputCity(cityTitle, user.userCity())
            .SelectState(stateTitle, user.userState())
            .InputPostcode(zipTitle, user.userPostCode())
            .InputPhoneNumber(phoneTitle, user.userPhone())
            .SubmitRegistration()
            .LogWithIncorectDataAlertAssertion(invalidPassword);
    })
})