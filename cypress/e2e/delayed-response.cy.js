describe('Fetching users with a delayed response', () => {
  it('Should list users even with delay', () => {
    cy.api({
      method: 'GET',
      url: `${Cypress.config('baseUrl')}/users?delay=3`,
      headers: {
        'accept': 'application/json',
        'x-api-key': 'reqres-free-v1'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.be.an('array').that.is.not.empty
    })
  })
})