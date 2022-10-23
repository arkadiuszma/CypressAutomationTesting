class RegisterPage{
    elements ={
        SignUpBtn:() => cy.get('.login').contains('Sign in'),
        RegisterTitle:() => cy.get('#create-account_form h3'),
        EmailInput:() => cy.get('#email_create'),
        InvalidEmailText:() => cy.get('#create_account_error'),
        CreateAccountBtn:() => cy.get('#SubmitCreate').contains('Create an account'),
        HeadingRegisterTitle:() => cy.get('#account-creation_form h3').eq(0),
        CustomerName:() => cy.get('#customer_firstname'),
        AssertTitleName:() => cy.get('label[for="customer_firstname"]'),
        LastNameInput:() => cy.get('#customer_lastname'),
        AssertTitleSecondName:() => cy.get('label[for="customer_lastname"]'),
        PasswordInput:() => cy.get('#passwd'),
        AssertPasswordTitle:() => cy.get('label[for="passwd"]'),
        MaleCheck:() => cy.get('#id_gender1'),
        FemaleCheck:() => cy.get('#id_gender2'),
        SelectDay:() => cy.get('#days'),
        SelectMonth:() => cy.get('#months'),
        SelectYear:() => cy.get('#years'),
        AssertDateTitle:() => cy.get('label').contains('Date of Birth'),
        AddressInput:() => cy.get('#address1'),
        AssertAdressTitle:() => cy.get('label[for="address1"]'),
        NewsletterCheck:() => cy.get('#newsletter'),
        OffersCheck:() => cy.get('#optin'),
        CityInput:() => cy.get('#city'),
        AssertCityTitle:() => cy.get('label[for="city"]'),
        StateSelect:() => cy.get('#id_state'),
        AssertStateTitle:() => cy.get('label[for="id_state"]'),
        PostcodeInput:() => cy.get('#postcode'),
        AssertPostcodeTitle:() => cy.get('label[for="postcode"]'),
        PhoneNumberInput:() => cy.get('#phone_mobile'),
        AssertPhoneTitle:() => cy.get('label[for="phone_mobile"]'),
        SubmitBtn:() => cy.get('#submitAccount'),
        AssertRegistration:() => cy.get('.info-account'),
        LogoutBtn:() => cy.get('.logout'),
        AlertIncorectData:() => cy.get('.alert-danger')
    }
    
    GoToRegisterPage(text){
        this.elements.SignUpBtn().click();
        this.elements.RegisterTitle().should('contain', text);
        return this;
    }
    InputEmail(email, headingTitle){
        this.elements.EmailInput().type(email);
        this.elements.CreateAccountBtn().click();
        this.elements.HeadingRegisterTitle().should('contain',headingTitle);
        return this;
    }
    InvalidInputWrongEmailFormat(email, text){
        this.elements.EmailInput().type(email);
        this.elements.CreateAccountBtn().click();
        this.elements.InvalidEmailText().should('contain', text);
        return this;
    }
    ChooseSex(sex){
            if (sex === 'male'){
                this.elements.MaleCheck().click()
                                         .should('be.checked');
            }
            else if(sex === 'female'){
                this.elements.FemaleCheck().click()
                                           .should('be.checked');
            }
            return this;
    }
    InputCustomerName(title, name){
        this.elements.AssertTitleName().should('contain', title);
        this.elements.CustomerName().type(name);
        return this;
    }
    InputLastName(title, lastName){
        this.elements.AssertTitleSecondName().should('contain', title);
        this.elements.LastNameInput().type(lastName);
        return this;
    }
    InputPassword(title, password){
        this.elements.AssertPasswordTitle().should('contain', title);
        this.elements.PasswordInput().type(password);
        return this;
    }
    SelectDayOfBirth(title, day, month, year){
        this.elements.AssertDateTitle().should('contain', title)
        this.elements.SelectDay().select(day);
        this.elements.SelectMonth().select(month);
        this.elements.SelectYear().select(year);
        return this;
    }
    CheckAgreement(newsletterAgreement, offersAgreement){
        if (newsletterAgreement === 'yes'){
            this.elements.NewsletterCheck().check().should('be.checked');
        }
        else {
            this.elements.NewsletterCheck().should('not.be.checked')
        }
        if (offersAgreement === 'yes'){
            this.elements.OffersCheck().check().should('be.checked');
        }
        else {
            this.elements.OffersCheck().should('not.be.checked')
        }
        return this;
    }
    InputAddress(title, address){
        this.elements.AssertAdressTitle().should('contain',title);
        this.elements.AddressInput().type(address);
        return this;
    }
    InputCity(title, city){
        this.elements.AssertCityTitle().should('contain',title);
        this.elements.CityInput().type(city);
        return this;
    }
    SelectState(title, state){
        this.elements.AssertStateTitle().should('contain',title);
        this.elements.StateSelect().select(state)
        return this;
    }
    InputPostcode(title, postcode){
        this.elements.AssertPostcodeTitle().should('contain',title);
        this.elements.PostcodeInput().type(postcode);
        return this;
    }
    InputPhoneNumber(title, phoneNo){
        this.elements.AssertPhoneTitle().should('contain',title);
        this.elements.PhoneNumberInput().type(phoneNo);
        return this;
    }
    SubmitRegistration(){
        this.elements.SubmitBtn().click();
        return this;
    }
    LogInPageAssertion(title){
        this.elements.AssertRegistration().should('contain', title);
        return this;
    }
    Logout(title){
        this.elements.LogoutBtn().click();
        this.elements.SignUpBtn().should('be.visible');
        return this;
    }
    LogWithIncorectDataAlertAssertion(text){
        this.elements.AlertIncorectData().should('contain', text);
        return this;
    }
       

}
export default RegisterPage;