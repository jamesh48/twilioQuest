const calculateMass = (strArr) => {
  return strArr.reduce((totalCount, item) => {
    totalCount += item.length;
    return totalCount;
  }, 0);
};
