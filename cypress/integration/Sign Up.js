describe('baufest web test', () => {
  it('cy.go() - go back or forward in the browser\'s history', () => {
    // https://on.cypress.io/go

    //cy.location('pathname').should('include', 'navigation')
	cy.visit('https://www.demoblaze.com/index.html')
	cy.get('#signin2').click()
	cy.wait(2000)
	cy.get('#sign-username').type('UsuarioBaufest1')
	cy.wait(2000)
	cy.get('#sign-password').type('12345')
	cy.get('[onclick="register()"]').click()			
  
  })
})
