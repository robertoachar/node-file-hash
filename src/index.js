const crypto = require('crypto');

module.exports.createHash = (buffer) => {
  return new Promise((resolve, reject) => {
    if (!buffer) reject('Buffer not found');

    const md5 = crypto.createHash('md5').update(buffer).digest('hex');
    const sha1 = crypto.createHash('sha1').update(buffer).digest('hex');
    const sha256 = crypto.createHash('sha256').update(buffer).digest('hex');

    const hash = {
      md5,
      sha1,
      sha256
    };

    resolve(hash);
  });
};
