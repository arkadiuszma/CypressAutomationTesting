class ContactUsPage{
    elements ={
        ContactBtn: () => cy.get('a[title="Contact Us"]'),
        HeadingTitle: () => cy.get('.page-heading.bottom-indent'),
        SubjectList: () => cy.get('#id_contact'),
        EmailInput: () => cy.get('#email'),
        OrderInput: () => cy.get('#id_order'),
        FileUploadInput: () => cy.get('#fileUpload'),
        MessageInput: () => cy.get('#message'),
        SendBtn: () => cy.get('#submitMessage'),
        ValidAlert: () => cy.get('.alert.alert-success'),
        InvalidAllert: () => cy.get('div[class="alert alert-danger"] ol li')
    }
    getContactUsFormPage(title) {
        this.elements.ContactBtn().then (element => {
            expect(element).to.contain(title);
            })
        this.elements.ContactBtn().click();
        return this;
    }
    checkHeadingTitle(title){
        this.elements.HeadingTitle().should('contain', title);
        return this;
    }
    chooseSubject(subject){
        this.elements.SubjectList().select(subject).should('contain',subject);
        return this;
    }
    inputEmail(email){
        this.elements.EmailInput().type(email);
        return this;
    }
    inputOrderNumber(orderNo){
        this.elements.OrderInput().type(orderNo);
        return this;
    }
    inputMessage(message){
        this.elements.MessageInput().type(message);
        return this;
    }
    fileUpload(fileLocal){
        this.elements.FileUploadInput().attachFile(fileLocal);
        return this;
    }
    sendForm(){
        this.elements.SendBtn().click();
        return this;
    }
    getValidAlert (alert){
        this.elements.ValidAlert().should('contain', alert);
        return this;
    }
    getInvalidAlert (alert){
        this.elements.InvalidAllert().should('contain', alert);
        return this;
    }
}
export default ContactUsPage;