

import Session from '../models/Session';

describe('cy.type demo', () => {
  it('Enter text in input', () => {
    Session.init();
    cy.get(`#search-input`).type('network throttle');
  })

})

