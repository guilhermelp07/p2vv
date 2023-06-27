/// <reference types="cypress" />

import { login, setCypress, wait, wait2 } from "./service"

setCypress(cy);

describe('Cenário 1: Login e Navegação', () => {
    it('Login e redirecionamento', () => {
        // login
        cy.visit('https://saucedemo.com/')
        wait()
        cy.get('input[id=user-name]').type('standard_user')
        cy.get('input[id=password]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()
        wait()

        // verifica se foi direcionado corretamente
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
    })

    it('Navegação', () => {
        login()

        // verificando os fluxos
        // cy.get('.inventory_item_name').each(($el, index) => {
        //     wait2(1000)
        //     cy.wrap($el).click()
        //     cy.get('[data-test="back-to-products"]').click()
        // })

        // abrindo os detalhes de cada produto
        for(var i=0; i<6; i++){
            cy.get(`#item_${i}_title_link > .inventory_item_name`).click()
            wait()
            cy.get('[data-test="back-to-products"]').click()
            wait()
        }

        // verifica o fluxo do carrinho de compras a as url's
        cy.get('.shopping_cart_link').click()
        wait()
        cy.url().should('be.equal', 'https://www.saucedemo.com/cart.html')

        wait()
        cy.get('[data-test="continue-shopping"]').click()
        wait()
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')

    })

    it('Verificando os elementos', () => {
        login()
        
        cy.get('.inventory_item_label').each(($el, index, $list) => {
            wait()
            cy.wrap($el)
            cy.get(`#item_${index}_title_link`).should('be.visible')
        })

        cy.get('.btn_inventory').each(($el, index, $list) => {
            cy.wrap($el).should('be.visible').click()
            wait()
            cy.get('.btn_inventory').eq(index).should('be.enabled').should('be.visible')
            // wait()
        })

        // carrinho visível e habilitado
        cy.get('.shopping_cart_link').should('be.visible')
    })
})