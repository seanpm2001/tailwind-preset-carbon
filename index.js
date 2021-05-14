/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { addThemeToConfig } = require('./src/themes');

console.log(addThemeToConfig('white'));

module.exports = addThemeToConfig('white');