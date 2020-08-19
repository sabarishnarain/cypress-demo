
import Session from '../models/Session';

describe('cy.select demo usecase', () => {
  it('select by text', () => {
    Session.init();
    cy.get(`#lang-select`).select('Español');
  })

})

