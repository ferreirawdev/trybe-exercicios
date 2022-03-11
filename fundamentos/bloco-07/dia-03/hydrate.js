const hydrate = (string) => {
  const splitString = string.split("");
  let glassesOfWater = 0;

  for (let i = 0; i < splitString.length; i += 1) {
    const glassesOfDrink = parseInt(splitString[i]);

    if (glassesOfDrink) {
      glassesOfWater += glassesOfDrink;
    }
  }

  if (glassesOfWater > 1) {
    return `${glassesOfWater} copos de água`;
  }

  return `${glassesOfWater} copo de água`;
};

module.exports = hydrate;
