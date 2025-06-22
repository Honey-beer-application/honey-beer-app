/// <reference types="cypress" />

describe('application app page', () => {
  beforeEach(() => {
    cy.visit("");
    cy.viewport(1280, 720)
  })

  // it('Should be loaded', () => {
  //   cy.visit("")
  // })
  it("Should enter into register page",()=>{
    cy.get("button").contains("Register").click()
  })
  it("Should enter into login page",()=>{
    cy.get("button").contains("Log in").click()
  })
  it("Should enter into 'Product stores' page",()=>{
    cy.get("button").contains("Product stores").click()
  })
  it("Should enter into 'Our stores' page",()=>{
    cy.get("button").contains("Our stores").click()
  })
})
