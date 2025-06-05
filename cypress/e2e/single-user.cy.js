describe('Single user', () => {
  it('Should get a single user', () => {
    cy.api({
      method: 'GET',
      url: `${Cypress.config('baseUrl')}/users/2`,
      headers: {
        'accept': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      FailOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data.id).to.eq(2)
      expect(response.body.data.email).to.eq('janet.weaver@reqres.in')
      expect(response.body.data.first_name).to.eq('Janet')
      expect(response.body.data.last_name).to.eq('Weaver')
      expect(response.body.data.avatar).to.be.a('string')
    })
  })
})