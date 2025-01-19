import { activitySelectors } from "../airport-labs-selectors/activity.selectors";

export class Activity {
    checkActivitiesStatistics = (text, testId) => {
      cy.get(activitySelectors.activity_section(testId))
        .scrollIntoView()
        .should('have.text', text)
        .and('have.css', 'font-size', '40px')
        .and('have.css', 'font-family', 'Satoshi, sans-serif')
        .and('have.css', 'color', 'rgb(82, 206, 147)')
    } 
}