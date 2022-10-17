const scan = (strArr) => {
  return strArr.reduce((count, item) => {
    if (item === 'contraband') {
      count++;
    }
    return count;
  }, 0);
};
