describe('Update a user', () => {
  it('Should update a user', () => {
    cy.fixture('users').then((data) => {
      cy.api({
        method: 'PUT',
        url: `${Cypress.config('baseUrl')}/users/2`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        },
        body: data.updateUser,
        FailOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('morpheus')
        expect(response.body.job).to.eq('zion resident')
        expect(response.body.updatedAt).to.be.a('string')
      })
    })
  })
})