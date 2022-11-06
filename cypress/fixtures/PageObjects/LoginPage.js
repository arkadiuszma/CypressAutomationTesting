class LoginPage{
    elements = {
        SignInBtn:() => cy.get('.login').contains('Sign in'),
        HeadingTitle:() => cy.get('#login_form h3'),
        EmailInput:() => cy.get('#email'),
        EmailTitle:() => cy.get('label[for="email"]'),
        PasswordInput:() => cy.get('#passwd'),
        PasswordTitle:() => cy.get('label[for="passwd"]'),
        RecoverPassword:() => cy.get('a[title="Recover your forgotten password"]'),
        SubmitBtn:() => cy.get('#SubmitLogin'),
        AssertLogIn:() => cy.get('.info-account'),
        LogoutBtn:() => cy.get('.logout'),
        InvalidAuthorization:() => cy.get('.alert-danger li'),
        RecoverTitle:() => cy.get('h1.page-subheading'),
        RetrieveBtn:() => cy.contains('Retrieve Password'),
        AlertSendEmailMessage:() => cy.get('.alert-success')

    }
    GoToLoginPage(headingTitle){
        this.elements.SignInBtn().click();
        this.elements.HeadingTitle().should('contain',headingTitle);
        return this;
    }
    LogIn(emailInput, password, emailTitle, passwordTitle){
        this.EmailInput(emailTitle, emailInput);
        this.elements.PasswordTitle().should('contain', passwordTitle);
        this.elements.PasswordInput().type(password);
        return this;
    }
    SubmitLogIn(btnText){
        this.elements.SubmitBtn().should('contain', btnText).click();
        return this;
    }
    MyPageAssert(title){
        this.elements.AssertLogIn().should('contain', title);
        return this;
    }
    Logout(){
        this.elements.LogoutBtn().click();
        this.elements.SignInBtn().should('be.visible');
        return this;
    }
    CheckError(errorText){
        this.elements.InvalidAuthorization().should('contain', errorText)
        return this;
    }
    RecoverPassword(text, headingTitle,emailTitle,emailInput){
        this.elements.RecoverPassword().should('contain', text).click();
        this.elements.RecoverTitle().should('have.text', headingTitle);
        this.EmailInput(emailTitle,emailInput);
        this.elements.RetrieveBtn().should('have.class', 'btn').click();
        return this;
    }
    CheckSendMessageAlert(alert){
        this.elements.AlertSendEmailMessage().should('contain', alert)
        return this;
    }
    EmailInput(emailTitle, emailInput){
        this.elements.EmailTitle().should('contain', emailTitle);
        this.elements.EmailInput().clear().type(emailInput)
    }
}
export default LoginPage;