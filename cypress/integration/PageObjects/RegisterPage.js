class RegisterPage{
    elements ={
        SignUpBtn:() => cy.get('.login').contains('Sign in'),
        RegisterTitle:() => cy.get('#create-account_form h3'),
        EmailInput:() => cy.get('#email_create'),
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
        AssertAdressTitle:() => cy.get('label[for="address1"]')

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
    InputAddress(title,address){
        this.elements.AssertAdressTitle().should('contain',title);
        this.elements.AddressInput().type(address);
        return this;
    }
       

}
export default RegisterPage;