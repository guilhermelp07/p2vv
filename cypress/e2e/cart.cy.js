/// <reference types ="cypress" />

import { login, setCypress, wait } from "./service"

setCypress(cy);

describe('Cenário 3: Adição de Produtos ao Carrinho', () => {

  beforeEach(login)

  it('Adicionar produtos ao carrinho', () => {

    // adicionando os três primeiros produtos no carrinho
    cy.get('.inventory_item').each((product, index) => {
        if (index < 3) {
            cy.wrap(product).find('.btn_inventory').click();
        }
    });

    // abrir o carrinho
    cy.get('.shopping_cart_link').click();

    // verificando se existem 3 produtos lá
    cy.get('.cart_item').should('have.length', 3);

    // removendo todos os produtos do carrinho
    // cy.get('.cart_item').each((cartItem, index) => {
    //     cy.wrap(cartItem).find('.cart_button').click();
    //     cy.get('.cart_item').should('have.length', 3 - (index + 1));
    //   });

    // cy.get('.cart_item').each((cartItem, index) => {
    //     cy.wrap(cartItem).find('.inventory_item_name').should('contain', `Item ${index}`);
    // });
        // cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        // wait()
        // cy.get('[id="shopping_cart_container"]').click()
        // wait()
        // cy.get('[data-test="checkout"]').click()
        // wait()
        // cy.get('input[data-test=firstName]').type('Nome')
        // wait()
        // cy.get('input[data-test=lastName]').type('Sobrenome')
        // wait()
        // cy.get('input[data-test=postalCode]').type('123456')
        // wait()
        // cy.get('[data-test="continue"]').click()
        // wait()
        // cy.get('[data-test="finish"]').click()
  })
})