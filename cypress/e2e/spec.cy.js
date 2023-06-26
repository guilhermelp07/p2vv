/// <reference types ="cypress" />

import { login, setCypress, wait } from "./service"

setCypress(cy);

describe('Todos os Cenários', () => {
  it('Todos os Cenários', () => {
        // Login
        login()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        wait()
        cy.get('[id="shopping_cart_container"]').click()
        wait()
        cy.get('[data-test="checkout"]').click()
        wait()
        cy.get('input[data-test=firstName]').type('Nome')
        wait()
        cy.get('input[data-test=lastName]').type('Sobrenome')
        wait()
        cy.get('input[data-test=postalCode]').type('123456')
        wait()
        cy.get('[data-test="continue"]').click()
        wait()
        cy.get('[data-test="finish"]').click()
  })
})

// describe('Cenário 1: Login', () => {
//   it('Login', () => {
//         // Login
//         cy.visit('https://saucedemo.com/')
//         wait()
//         cy.get('input[id=user-name]').type('standard_user')
//         wait()
//         cy.get('input[id=password]').type('secret_sauce')
//         wait()
//         cy.get('[data-test="login-button"]').click()
//         wait()
//   })
// })

// describe('Cenário 3: Adicionar produto ao carrinho', () => {
//   it('Adicionar produto ao carrinho', () => {
//     // Adicionar produto ao carrinho
//         // Login
//         cy.visit('https://saucedemo.com/')
//         wait()
//         cy.get('input[id=user-name]').type('standard_user')
//         wait()
//         cy.get('input[id=password]').type('secret_sauce')
//         wait()
//         cy.get('[data-test="login-button"]').click()
//         wait()

//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
//     wait()
//     cy.get('[id="shopping_cart_container"]').click()
//     wait()
//   })
// })

// describe('Cenário 4:Checkout do produto.', () => {
//   it('Checkout do produto', () => {
//     // Checkout do produto
//         // Login
//         cy.visit('https://saucedemo.com/')
//         wait()
//         cy.get('input[id=user-name]').type('standard_user')
//         wait()
//         cy.get('input[id=password]').type('secret_sauce')
//         wait()
//         cy.get('[data-test="login-button"]').click()
//         wait()

//     cy.get('[id="shopping_cart_container"]').click()
//     wait()
//     cy.get('[data-test="checkout"]').click()
//     wait()
//     cy.get('input[data-test=firstName]').type('Nome')
//     wait()
//     cy.get('input[data-test=lastName]').type('Sobrenome')
//     wait()
//     cy.get('input[data-test=postalCode]').type('123456')
//     wait()
//     cy.get('[data-test="continue"]').click()
//     wait()
//     cy.get('[data-test="finish"]').click()
//   })
// })
