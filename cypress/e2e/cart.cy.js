/// <reference types ="cypress" />

import { logOut, login, setCypress, wait } from "./service"

setCypress(cy);

describe('Cenário 3: Adição de Produtos ao Carrinho', () => {

  beforeEach(login)

  it('Adicionar e remover produtos ao carrinho e verificar o comportamento', () => {

    wait()
    // adicionando os três primeiros produtos no carrinho
    cy.get('.inventory_item').each((product, index) => {
        if (index < 3) {
            cy.wrap(product).find('.btn_inventory').click()
        }
    });

    wait()
    // abrir o carrinho
    cy.get('.shopping_cart_link').click()

    wait()
    // verificando se existem 3 produtos lá
    cy.get('.cart_item').should('have.length', 3)

    wait()
    // verificando se o marcador da quantidade aumentou para 3
    cy.get('.shopping_cart_badge').should('have.text', '3')

    // removendo todos os produtos do carrinho e verificando o tamanho da lista
    cy.get('.cart_item').each((cartItem, index) => {
        cy.wrap(cartItem).find('.cart_button').click()
        cy.get('.cart_item').should('have.length', 3 - (index + 1))
        // cy.get('.shopping_cart_badge').should('have.text', (index !== 2 ? `${2 - index}` : ''))
    });
    wait()
    // voltar para a tela inicial
    cy.get('[data-test="continue-shopping"]').click()

    wait()
    // adicionando todos os produtos no carrinho
    cy.get('.inventory_item').each((product, index) => {
        cy.wrap(product).find('.btn_inventory').click()
    });

    // abrir o carrinho
    cy.get('.shopping_cart_link').click()

    wait()
    // verificando se existem apenas 6 produtos lá
    cy.get('.cart_item').should('have.length', 6)
    // verificando o contador do carrinho
    cy.get('.shopping_cart_badge').should('have.text', '6')
    wait()
    // verificando se o marcador da quantidade aumentou para 6
    cy.get('.shopping_cart_badge').should('have.text', '6')

    // voltar para a tela inicial
    cy.get('[data-test="continue-shopping"]').click()

    // remover 2 produtos a partir da tela inicial e conferir se o tamanho da lista diminuiu
    cy.get('.inventory_item').each((product, index) => {
        if (index < 2) {
            cy.wrap(product).find('.btn_inventory').click()
        }
    });
    wait()

    // abrir o carrinho
    cy.get('.shopping_cart_link').click()

    wait()
    // verificando se existem apenas 4 produtos lá
    cy.get('.cart_item').should('have.length', 4)

    cy.get('[data-test="continue-shopping"]').click()

    // removendo todos os produtos do carrinho a partir da tela inicial
    cy.get('.inventory_item').each((product, index) => {
        if(index > 1)
            cy.wrap(product).get('.btn_inventory').eq(index).click() // eq(index).should('have.text', 'Remove').click()
    });

    logOut()
  })
})