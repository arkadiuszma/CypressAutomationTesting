class HomePage{
    elements={
        Newsletter:() => cy.get('#newsletter_block_left'),
        NewsletterInput:() => cy.get('#newsletter-input'),
        NewsletterSendAssertion:() => cy.get('p.alert')
    }
    GetNewsletter(email){
        this.elements.Newsletter().should('contain', 'Newsletter');
        this.elements.NewsletterInput().clear().type(email + '{enter}');
        return this;
    }
    CheckNewsletterAlert(alert){
        this.elements.NewsletterSendAssertion().should('contain', alert)
    }
}
export default HomePage;