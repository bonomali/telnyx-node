'use strict';


var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'actions',

  register: telnyxMethod({
    method: 'POST',
    path: '/register/sim_cards',
  }),

});
