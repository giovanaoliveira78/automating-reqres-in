describe('Register a user', () => {
  it('Should register a user successfully', () => {
    cy.fixture('users').then((data) => {
      cy.api({
        method: 'POST',
        url: `${Cypress.config('baseUrl')}/register`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        },
        body: data.validUser
      }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.id).to.eq(4)
        expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4')
      })
    })
  })

  it('Should fail to register a user', () => {
    cy.fixture('users').then((data) => {
      cy.api({
        method: 'POST',
        url: `${Cypress.config('baseUrl')}/register`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        },
        body: data.invalidUser,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400),
          expect(response.body.error).to.eq('Note: Only defined users succeed registration')
      })
    })
  })
})