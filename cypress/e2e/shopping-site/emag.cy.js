/// <reference types="cypress"/>

import { menuSelectors } from "../../support/shopping-site/shopping-site-selectors/menu.selectors"
import { filterSelectors } from "../../support/shopping-site/shopping-site-selectors/filters.selectors"
import { sortingSelectors } from "../../support/shopping-site/shopping-site-selectors/sorting.selectors"
import { cartSelectors } from "../../support/shopping-site/shopping-site-selectors/cart.selectors"

describe('Select some products from a shopping site', () => {
    it('Choose a TV an an accessory', () => {
        cy.visit('https://emag.ro')

        cy.log('Select the TV category')
        cy.get(menuSelectors.products_categories.tv_av_foto).click()
        cy.get(menuSelectors.products_categories.sub_categories.tv).click()
        cy.url().should('contain', '/televizoare')

        cy.log('Set some filters for TV')
        cy.get(filterSelectors.three_stars_rating).click()
        cy.get(filterSelectors.samsung_brand).click()
        cy.get(filterSelectors.oled_display_type).click()

        cy.log('Sort price descending...')
        cy.get(sortingSelectors.sort_dropdown).first().scrollIntoView().click({force: true})
        cy.wait(1000)
        cy.get(sortingSelectors.price_descending).click({force: true})

        cy.log('Add TV to cart')
        cy.get(cartSelectors.add_to_cart).first().click()
        cy.get(cartSelectors.confirmation_message)
          .should('be.visible')
          .and('have.text', 'Produsul a fost adaugat in cos')
        cy.get(cartSelectors.close_confirmation).click()

        cy.log('Select TV Accesories category')
        cy.get(menuSelectors.products_categories.sub_categories.tv_accessories).click()

        cy.log('Set some filters for accessories')
        cy.get(filterSelectors.three_stars_rating).click()
        cy.get(filterSelectors.samsung_brand).click()
        cy.get(filterSelectors.in_stock).click()

        cy.log('Sort price ascending...')
        cy.get(sortingSelectors.sort_dropdown).first().scrollIntoView().click({force: true})
        cy.wait(1000)
        cy.get(sortingSelectors.price_ascending).click({force: true})

        cy.log('Add accessory to cart')
        cy.get(cartSelectors.add_to_cart).first().click()
        cy.get(cartSelectors.confirmation_message)
          .should('be.visible')
          .and('have.text', 'Produsul a fost adaugat in cos')
        cy.get(cartSelectors.close_confirmation).click()

        cy.log('Check the cart...')
        cy.get(cartSelectors.cart_items_number)
          .should('have.text', '2')
    })
})