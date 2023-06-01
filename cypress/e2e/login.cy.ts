describe('Login page', () => {
  beforeEach(() => cy.visit('/login'));
  it('should correctly login the user in english', () => {
    ['Login', 'Login with Google', 'Login with Github', 'Register', 'Reset'].forEach((button) => cy.contains(button));
    cy.viewport(1200, 1050);
    cy.get('[data-cy="input-email"]').type('some email@');
    cy.get('[data-cy="input-password"]').type('some fucking password');
    const loginBtn = cy.get('.submit-btn');
    loginBtn.click();
    cy.get('[data-cy="input-email"]').clear().type('sanich123voronin@gmail.com');
    cy.get('[data-cy="input-password"]').clear().type('&FWD7rlm');
    loginBtn.click();
    cy.contains('unable to login unregistered user');
  });

  it('should correctly login the user in russian', () => {
    ['Login', 'Login with Google', 'Login with Github', 'Register', 'Reset'].forEach((button) => cy.contains(button));
    cy.get('[data-cy="settings-btn"]').click();
    cy.get('[data-cy="dark"]').click();
    cy.get('[data-cy="light"]').click();
    cy.get('[data-cy="ru"]').click();
    ['Логин', 'Залогинься с Google', 'Залогинься с Github', 'Регистрация', 'Сброс'].forEach((button) => cy.contains(button));
    cy.get('button').contains('Сброс').click();
    cy.get('button').contains('Регистрация').click();
    cy.get('button').contains('Логин').click();
  });
});

export {};
