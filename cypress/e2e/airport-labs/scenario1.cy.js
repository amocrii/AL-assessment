/// <reference types="cypress"/>

import { sectionsSelectors } from "../../support/airport-labs/airport-labs-selectors/sections.selectors"

describe('Verify that the title from a section is correct', () => {
  it('Check the title of the goal section', () => {
    cy.visit('https://airportlabs.com')

    cy.log('Check that the goal section title is visible')
    cy.get(sectionsSelectors.goal_title)
      .scrollIntoView()
      .should('be.visible')

    cy.log('Make sure that the goal section title is correct')
    cy.get(sectionsSelectors.goal_title)
      .should('have.text', 'Our main goal is to make aviation more efficient.')

    cy.log('Make sure that the title has the right css characteristics')
    cy.get(sectionsSelectors.goal_title)
      .should('have.css', 'font-size', '60px')
      .and('have.css', 'font-family', 'Satoshi, sans-serif')
      .and('have.css', 'color', 'rgb(126, 139, 255)')   
  })
})