(() => {
  const map = {
    0: 'alive',
    1: 'flowering',
    2: 'shedding',
    3: 'other',
  };

  const [_x, _y, input] = process.argv;

  if (Number(input >= 3)) {
    return console.info(map[3]);
  }
  console.info(map[input]);
})();
