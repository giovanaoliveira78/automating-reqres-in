describe('List users', () => {
  it('Should list users', () => {
    cy.api({
      method: 'GET',
      url: `${Cypress.config('baseUrl')}/unknown`,
      headers: {
        'accept': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.be.an('array').that.is.not.empty
    })
  })
})