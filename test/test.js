'use strict';

const lib = require('../src');

describe('TESTS', () => {

  test('should return an error', (done) => {
    lib.createHash('')
      .catch((err) => {
        expect(err).toBeDefined();
        expect(err).toBe('Buffer not found');

        done();
      });
  });

  test('should return a hash', (done) => {
    lib.createHash('Buffer')
      .then((hash) => {
        expect(hash).toBeDefined();

        expect(hash.md5).toBeDefined();
        expect(hash.sha1).toBeDefined();
        expect(hash.sha256).toBeDefined();

        expect(hash.md5).toBe('7e62bc342f41c946868f0ea6f0b712d8');
        expect(hash.sha1).toBe('2be5f64b36230104ef9c6e230215846a83d18df6');
        expect(hash.sha256).toBe('e44193fd2d21722a46c8fcab041508d4c5be95a34828b72c631df53e8d7e20a6');

        done();
      });
  });

});
