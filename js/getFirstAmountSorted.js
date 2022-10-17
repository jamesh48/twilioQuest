const getFirstAmountSorted = (strArr, n) => {
  if (!n) {
    return [];
  }
  return strArr.sort().slice(0, n);
};
