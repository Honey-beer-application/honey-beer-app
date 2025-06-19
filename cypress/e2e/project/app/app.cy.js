import {environment} from "../../../../src/environments/environment"
/// <reference types="cypress" />

describe('application app page', () => {
//   beforeEach(() => {
//     cy.visit("")
//   })

  it('Should be loaded', () => {
    cy.visit(environment.frontUrl)
  })
})
