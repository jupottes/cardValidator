const cardValidator = (number) => {
  return isValidateCard(number);
};

const isValidateCard = number => {
  const invertedNumberCard = number.toString().split('').reverse().map(n => parseInt(n));
  const doubledNumberCard = multDigitsCard(invertedNumberCard);
  const sumDigitsCard = doubledNumberCard.reduce((sum, n) => sum + n, 0);

  const resultCard = (sumDigitsCard % 10 === 0) ? true : false;
  return resultCard;
};

const multDigitsCard = array => array.map((n, index) => {
  if (index % 2 !== 0) {
    n *= 2;
    if (n > 9) n -= 9;
  }
  return n;
});

module.exports = cardValidator;