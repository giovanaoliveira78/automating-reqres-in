describe('Login', () => {
  it('Should login successfully', () => {
    cy.fixture('users').then((data) => {
      cy.api({
        method: 'POST',
        url: `${Cypress.config('baseUrl')}/login`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        },
        body: data.userLogin,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4')
      })
    })
  })

  it('Should fail to login', () => {
    cy.fixture('users').then((data) => {
      cy.api({
        method: 'POST',
        url: `${Cypress.config('baseUrl')}/login`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        },
        body: data.userLoginFailed,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400)
        expect(response.body.error).to.eq('Missing email or username')
      })
    })
  })
})