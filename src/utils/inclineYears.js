const inclineCase = (num, nominative, genitive, genitivePlural) => {
  const inRangeOf = (x, min, max) => x >= min && x <= max;
  const mod = num % 10;

  if (inRangeOf(num, 11, 19) || inRangeOf(mod, 5, 9) || mod === 0) {
    return `${num} ${genitivePlural}`;
  }

  if (mod === 1) {
    return `${num} ${nominative}`;
  }

  return `${num} ${genitive}`;
};

const inclineYears = (yearsCount) => {
  return inclineCase(yearsCount, "Год", "Года", "Лет");
};

export default inclineYears;
