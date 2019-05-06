const chai = require('chai');
const index = require('../index.js');
const cardValidator = index.cardValidator;
const expect = chai.expect;

describe('cardValidator()', () => {
  it('should return true for 36490102462661', () => {
    expect(cardValidator(36490102462661)).to.equal(true);
  });
  it('should return false for 26490102462661', () => {
    expect(cardValidator(26490102462661)).to.equal(false);
  });
  it('should return error for a missing argument', () => {
    expect(() => cardValidator()).to.throw('missing argument');
  });
  it('should return error for "this is a string"', () => {
    expect(() => cardValidator('this is a string')).to.throw('this function does not accept string as argument');
  });
  it('should return error for "45754"', () => {
    expect(() => cardValidator('45754')).to.throw('this function does not accept string as argument');
  });
  it('should return error for 3', () => {
    expect(() => cardValidator(3)).to.throw('argument must have more than one digit');
  });
  it('should return error for 31.454', () => {
    expect(() => cardValidator(31.454)).to.throw('this function only accepts an integer as argument');
  });
});