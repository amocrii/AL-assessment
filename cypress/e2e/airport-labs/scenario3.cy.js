/// <reference types="cypress"/>

import { mediaSelectors } from "../../support/airport-labs/airport-labs-selectors/media.selectors";

describe('Verify the social media links', () => {
  beforeEach(() => {
    cy.visit('https://airportlabs.com')
  })

  it('Check the Facebook link', () => {
    cy.get(mediaSelectors.facebook_link)
      .invoke('removeAttr', 'target')
    cy.get(mediaSelectors.facebook_link).click()
    cy.origin('https://www.facebook.com', () => {
      cy.url().should('eq', 'https://www.facebook.com/AirportLabs')
    })
  })
    
  it('Check the Instagram link', () => {
    cy.get(mediaSelectors.instagram_link)
      .invoke('removeAttr', 'target')
    cy.get(mediaSelectors.instagram_link).click()
    cy.origin('https://www.instagram.com', () => {
      cy.url().should('eq', 'https://www.instagram.com/airportlabspeople/')
    })
  })

  it('Check the Linkedin link', () => {
    cy.get(mediaSelectors.linkedin_link)
      .invoke('removeAttr', 'target')
    cy.get(mediaSelectors.linkedin_link).click()
    cy.origin('https://www.linkedin.com', () => {
      cy.url().should('eq', 'https://www.linkedin.com/company/airportlabs/')
    })
  })
})
