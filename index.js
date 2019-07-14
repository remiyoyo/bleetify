const Rand = require('@remibutler/easyrandom');

/**
 * Bleet will either prefix or suffix a bleet to your word based on a percent chance if specified.
 *
 * @param {string} sentence any string
 * @param {number} [threshold=20] Likelihood of the bleet, defaults to 20% chance of a bleet
 */
const bleet = function (sentence, threshold = 20) {
  if (threshold < 1) {
    return sentence;
  }
  const gonnaBleet = Rand.getPercent() < threshold;
  if (threshold === 100 || gonnaBleet) {
    const heads = Rand.flipACoin();
    return (heads) ? bleetStart(sentence) : bleetEnd(sentence);
  }
  return sentence;
};

const bleetStart = (sentence) => {
  if (sentence[0].match(/^[.,:!?]/)) {
    return `Baa. ${sentence}`;
  }
  return `Baa, ${sentence[0].toLowerCase()}${sentence.substr(1)}`;
};

const bleetEnd = (sentence) => {
  if (sentence[sentence.length - 1].match(/^[.,:!?]/)) {
    return `${sentence.slice(0, -1)}, baa.`;
  }
  return sentence.trim() + ', baa.';
};

module.exports = {
  bleet
};
