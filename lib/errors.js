'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on btc-payment-protocol Module: {0}'
};

module.exports = require('@owstack/btc-lib').errors.extend(spec);
