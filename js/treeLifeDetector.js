(() => {
  const [_x, _y, ind] = process.argv;
  if (ind === '0') {
    return console.info('alive');
  }
  console.info('other');
})();
