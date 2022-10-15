/// <reference types="cypress" />


describe ('List test', () => {
    it('ForEach', () => {
        cy.visit('/');
        cy.get('[title="T-shirts"]').eq(1).click();
        cy.get('#selectProductSort').then(select => {
            cy.wrap(select).find('option').each(option => {
                cy.wrap(select).select(option.text());
            })
        })

    })
})
