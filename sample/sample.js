/* eslint no-console: 0 */

const lib = require('../src');

lib.createHash('Buffer')
  .then((hash) => console.log(hash))
  .catch((err) => console.error(err));
