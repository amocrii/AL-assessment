/// <reference types="cypress"/>

import { sectionsSelectors } from "../../support/airport-labs/airport-labs-selectors/sections.selectors"; 

describe('Verify the brand logo', () => {
  it('Check the AirportLabs logo', () => {
    cy.visit('https://airportlabs.com')

    cy.get(sectionsSelectors.navbar.logo)
      .should('exist')
      .and('be.visible')

    cy.log('Check the logo size and dimensions')
    cy.get(sectionsSelectors.navbar.logo)
      .invoke('attr', 'src')
      .then((logoUrl) => {
        cy.request(logoUrl).then((response) => {
          const imageSize = response.body.length
          const sizeInKB = imageSize / 1024

          expect(sizeInKB).to.be.closeTo(3.5, 0.1)
        })
      })

    cy.get(sectionsSelectors.navbar.logo).then(($img) => {
      const dimensions = $img[0].getBoundingClientRect();

      expect(dimensions.width).to.be.closeTo(140, 1)
      expect(dimensions.height).to.be.closeTo(40, 1)
    })
  })
})