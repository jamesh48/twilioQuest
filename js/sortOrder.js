(() => {
  const [_x, _y, inputOne, inputTwo] = process.argv;

  const inputOneToLower = inputOne.toLowerCase();
  const inputTwoToLower = inputTwo.toLowerCase();

  if (inputOneToLower < inputTwoToLower) return console.info(-1);

  if (inputOneToLower > inputTwoToLower) return console.info(1);
  console.info(0);
})();
