describe('baufest web test', () => {
  it('cy.go() - go back or forward in the browser\'s history', () => {
    // https://on.cypress.io/go

    //cy.location('pathname').should('include', 'navigation')
	cy.visit('https://www.demoblaze.com/index.html')
	cy.get('#login2').click()
	cy.wait(2000)
	
	cy.get('#loginusername').type('UsuarioBaufest1')
	cy.wait(2000)
	cy.get('#loginpassword').type('12345')
	cy.get('[onclick="logIn()"]').click()
	cy.wait(5000)
	cy.contains('Laptops').click()
	cy.wait(2000)
	cy.contains('Sony vaio i5').click()
	cy.wait(3000)
	cy.get('[onclick="addToCart(8)"]').click()
	cy.get('#cartur').click()
	cy.contains('Sony vaio i5')
	
	})
})
