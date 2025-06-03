describe('List users', () => {
  it('Should list users', () => {
    cy.api({
      method: 'GET',
      url: `${Cypress.config('baseUrl')}/users?page=2`,
      headers: {
        'accept': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      FailOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.be.an('array').that.is.not.empty
    })
  })
})