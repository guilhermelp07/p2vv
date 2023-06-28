let cy = {};

export function setCypress(cyParm){ cy = cyParm }

export function wait2(ms){ cy.wait(ms) }

export function wait(){ wait2(1000) }

export function login(){
    // Login
    cy.visit('https://saucedemo.com/')
    wait()
    cy.get('input[id=user-name]').type('standard_user')
    cy.get('input[id=password]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    wait()
}

export function logOut(){
    wait()
    cy.get('#react-burger-menu-btn').click()
    wait()
    cy.get('#logout_sidebar_link').click()
}