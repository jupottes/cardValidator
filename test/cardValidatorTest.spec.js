const assert = require("chai").assert;
const cardValidator = require("../lib/index");

describe('retCardValidator()', () => {
    it('deve retornar true', () => {
        assert.equal(cardValidator("5292050082393563"), true);
    });
    it('deve retornar false', () => {
        assert.equal(cardValidator("26490102462661"), false);
    });
    it('deve retornar false', () => {
        assert.equal(cardValidator("3940284750937"), false);
    });
    it('deve retornar false', () => {
        assert.equal(cardValidator("5292.0500.8239.3563"), false);
    });
    it('deve retornar true', () => {
        assert.equal(cardValidator("5067309006742187"), true);
    });
    it('deve retornar false', () => {
        assert.equal(cardValidator("529205yt82393563"), false);
    });
});

