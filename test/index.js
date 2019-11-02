const Bleetify = require('../index');
const Rand = require('@remibutler/easyrandom');
const Sinon = require('sinon');
const mocha = require('mocha');
const chai = require('chai');

// Test shortcuts
const beforeEach = mocha.beforeEach;
const afterEach = mocha.afterEach;
const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

describe('Bleet', () => {

  const exampleSentence = 'This is a sentence!';

  describe('Heads', () => {

    beforeEach(() => {
      Sinon.stub(Rand, 'flipACoin').callsFake(() => true);
    });

    afterEach(() => {
      Rand.flipACoin.restore();
    });

    it('Should add bleet to the end of a word', () => {
      const result = Bleetify.bleet(exampleSentence, 100);

      expect(result).to.equal('Baa, this is a sentence!');
    });

    it('Should alter punctuation at start', () => {
      const result = Bleetify.bleet(':This is a sentence!', 100);

      expect(result).to.equal('Baa. :This is a sentence!');
    });

  });

  describe('Tails', () => {

    beforeEach(() => {
      Sinon.stub(Rand, 'flipACoin').callsFake(() => false);
    });

    afterEach(() => {
      Rand.flipACoin.restore();
    });

    it('Should add bleet to the end of a word', () => {
      const result = Bleetify.bleet(exampleSentence, 100);

      expect(result).to.equal('This is a sentence, baa.');
    });

    it('Should alter punctuation at end', () => {
      const result = Bleetify.bleet('This is a sentence', 100);

      expect(result).to.equal('This is a sentence, baa.');
    });

  });

  describe('Threshold', () => {

    it('Should return sentence unchanged for threshold below 1', () => {
      const result = Bleetify.bleet(exampleSentence, 0);

      expect(result).to.equal(exampleSentence);
    });

    describe('Forced failure', () => {

      beforeEach(() => {
        Sinon.stub(Rand, 'getPercent').callsFake(() => 100);
        Sinon.stub(Rand, 'flipACoin').callsFake(() => false);
      });

      afterEach(() => {
        Rand.getPercent.restore();
        Rand.flipACoin.restore();
      });

      it('Should return a bleet when getPercent is below threshold', () => {
        const result = Bleetify.bleet(exampleSentence, 20);

        expect(result).to.equal(exampleSentence);
      });

    });

    describe('Forced success', () => {

      beforeEach(() => {
        Sinon.stub(Rand, 'getPercent').callsFake(() => 18);
        Sinon.stub(Rand, 'flipACoin').callsFake(() => false);
      });

      afterEach(() => {
        Rand.getPercent.restore();
        Rand.flipACoin.restore();
      });

      it('Should return a bleet when getPercent is below threshold', () => {
        const result = Bleetify.bleet(exampleSentence, 80);

        expect(result).to.equal('This is a sentence, baa.');
      });

    });

  });

});
