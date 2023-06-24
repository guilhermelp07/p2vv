/// <reference types ="cypress" />

function login(){
    // Login
    cy.visit('https://saucedemo.com/')
    cy.wait(1000)
    cy.get('input[id=user-name]').type('standard_user')
    cy.wait(1000)
    cy.get('input[id=password]').type('secret_sauce')
    cy.wait(1000)
    cy.get('[data-test="login-button"]').click()
    cy.wait(1000)
}

describe('Todos os Cenários', () => {
  it('Todos os Cenários', () => {
        // Login
        login()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.wait(1000)
        cy.get('[id="shopping_cart_container"]').click()

        cy.wait(1000)
        cy.get('[data-test="checkout"]').click()
        cy.wait(1000)
        cy.get('input[data-test=firstName]').type('Nome')
        cy.wait(1000)
        cy.get('input[data-test=lastName]').type('Sobrenome')
        cy.wait(1000)
        cy.get('input[data-test=postalCode]').type('123456')
        cy.wait(1000)
        cy.get('[data-test="continue"]').click()
        cy.wait(1000)
        cy.get('[data-test="finish"]').click()
  })
})

// describe('Cenário 1: Login', () => {
//   it('Login', () => {
//         // Login
//         cy.visit('https://saucedemo.com/')
//         cy.wait(1000)
//         cy.get('input[id=user-name]').type('standard_user')
//         cy.wait(1000)
//         cy.get('input[id=password]').type('secret_sauce')
//         cy.wait(1000)
//         cy.get('[data-test="login-button"]').click()
//         cy.wait(1000)
//   })
// })

// describe('Cenário 3: Adicionar produto ao carrinho', () => {
//   it('Adicionar produto ao carrinho', () => {
//     // Adicionar produto ao carrinho
//         // Login
//         cy.visit('https://saucedemo.com/')
//         cy.wait(1000)
//         cy.get('input[id=user-name]').type('standard_user')
//         cy.wait(1000)
//         cy.get('input[id=password]').type('secret_sauce')
//         cy.wait(1000)
//         cy.get('[data-test="login-button"]').click()
//         cy.wait(1000)

//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
//     cy.wait(1000)
//     cy.get('[id="shopping_cart_container"]').click()
//     cy.wait(1000)
//   })
// })

// describe('Cenário 4:Checkout do produto.', () => {
//   it('Checkout do produto', () => {
//     // Checkout do produto
//         // Login
//         cy.visit('https://saucedemo.com/')
//         cy.wait(1000)
//         cy.get('input[id=user-name]').type('standard_user')
//         cy.wait(1000)
//         cy.get('input[id=password]').type('secret_sauce')
//         cy.wait(1000)
//         cy.get('[data-test="login-button"]').click()
//         cy.wait(1000)

//     cy.get('[id="shopping_cart_container"]').click()
//     cy.wait(1000)
//     cy.get('[data-test="checkout"]').click()
//     cy.wait(1000)
//     cy.get('input[data-test=firstName]').type('Nome')
//     cy.wait(1000)
//     cy.get('input[data-test=lastName]').type('Sobrenome')
//     cy.wait(1000)
//     cy.get('input[data-test=postalCode]').type('123456')
//     cy.wait(1000)
//     cy.get('[data-test="continue"]').click()
//     cy.wait(1000)
//     cy.get('[data-test="finish"]').click()
//   })
// })
