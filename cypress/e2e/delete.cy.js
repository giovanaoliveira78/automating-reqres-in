describe('Delete a user', () => {
  it('Should delete a user', () => {
    cy.api({
      method: 'DELETE',
      url: `${Cypress.config('baseUrl')}/users/2`,
      headers: {
        'accept': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      FailOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204)
    })
  })
})