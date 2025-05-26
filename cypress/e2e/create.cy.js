describe('Create a user', () => {
  it('Should create a user', () => {
    cy.fixture('users').then((data) => {
      cy.api({
        method: 'POST',
        url: `${Cypress.config('baseUrl')}/users`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        },
        body: data.createUser,
        faiOnStatusCode: false
      })
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq('morpheus')
      expect(response.body.job).to.eq('leader')
      expect(response.body.id).to.be.a('string')
      expect(response.body.createdAt).to.be.a('string')
    })
  })
})