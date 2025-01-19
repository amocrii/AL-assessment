/// <reference types="cypress"/>

import { activitySelectors } from "../../support/airport-labs/airport-labs-selectors/activity.selectors";
import { Activity } from "../../support/airport-labs/page-object/activity";

const activity = new Activity();

describe('Verify the activity statistics', () => {
  it('Check that the activity statistics are correct', () => {
    cy.visit('https://airportlabs.com')

    cy.log('Setup: Add test id for each activity...')
    cy.get(activitySelectors.activities_names).each(($text, index) => {
      const activityText = $text.text().trim()

      cy.get(activitySelectors.activity_statistics)
        .eq(index)
        .invoke('attr', 'data-test-id', activityText)
      cy.get(activitySelectors.activity_statistics)
        .eq(index)
        .should('have.attr', 'data-test-id', activityText)
    })

    cy.log('Check the experience statistics...')
    activity.checkActivitiesStatistics('17+ Years', 'of Industry Experience')

    cy.log('Check the products statistics...')
    activity.checkActivitiesStatistics('10', 'SaaS Products')

    cy.log('Check the airports statistics...')
    activity.checkActivitiesStatistics('60+', 'Airports Worldwide')

    cy.log('Check the users statistics...')
    activity.checkActivitiesStatistics('300k', 'Users Worldwide')
  })
})