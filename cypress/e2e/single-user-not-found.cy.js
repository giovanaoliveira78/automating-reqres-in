describe('User not found', () => {
  it('Should get a user not found', () => {
    cy.api({
      method: 'GET',
      url: `${Cypress.config('baseUrl')}/users/23`,
      headers: {
        'accept': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })
})