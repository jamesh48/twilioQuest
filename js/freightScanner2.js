const scan = (strArr) => {
  return strArr.reduce((numArr, str, index) => {
    if (str === 'contraband') {
      numArr.push(index);
    }
    return numArr;
  }, []);
};
