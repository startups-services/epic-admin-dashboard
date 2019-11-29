const convertToSelectFormat = (arr) => (arr.map((elem) => {
  const translatedElem = { ...elem };
  if (!translatedElem.value) {
    translatedElem.value = elem.name;
  }
  if (!translatedElem.label) {
    translatedElem.label = elem.name;
  }

  return translatedElem;
})
);

export default convertToSelectFormat;
