const calculatePower = (numArr) => {
  return numArr
    .map((x) => x * 2)
    .reduce((total, num) => {
      return (total += num);
    }, 0);
};
