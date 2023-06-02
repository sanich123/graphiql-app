import { LANG } from '../../src/constants/languages';

describe('Main page', () => {
  beforeEach(() => cy.visit('/'));

  it('should correctly interract with the user and navigate to the login page and back', () => {
    cy.get('.header__login').click();
    ['Login', 'Login with Google', 'Login with Github', 'Register', 'Reset'].forEach((button) => cy.contains(button));
    cy.get('.header__logo').click();
    cy.contains(LANG.en.main.h1).should('exist');
  });

  it('should correctly open/close settings button', () => {
    cy.get('.header__settings-btn').click();
    cy.contains(LANG.en.ru).click();
    [LANG.ru.main.h1, LANG.ru.main.p, LANG.ru.main.startBtn].forEach((text) => cy.contains(text));
    cy.contains(LANG.ru.en).click();
    [LANG.en.main.h1, LANG.en.main.p, LANG.en.main.startBtn].forEach((text) => cy.contains(text));
    cy.contains(LANG.en.light).click();
    cy.get(`.${LANG.en.light.toLowerCase()}`).should('exist');
    cy.get('.header__settings-btn').click();
    cy.contains(LANG.en.ru).should('not.exist');
  });
});

export {};
