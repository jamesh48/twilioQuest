class Ducktypium {
  calibrationSequence = [];
  constructor(color) {
    this.color = color;
    if (['red', 'blue', 'yellow'].indexOf(this.color) === -1) {
      throw new Error('Color must be red, yellow, or blue!');
    }
    this.refract = (passedColor) => {
      if (['red', 'blue', 'yellow'].indexOf(passedColor) === -1) {
        throw new Error('Color must be red, yellow, or blue!');
      }
      if (this.color === passedColor) {
        return color;
      }

      if (
        ['red', 'blue'].every((color) =>
          [this.color, passedColor].some((y) => y === color)
        )
      ) {
        return 'purple';
      }

      if (
        ['red', 'yellow'].every((color) =>
          [this.color, passedColor].some((y) => y === color)
        )
      ) {
        return 'orange';
      }

      if (
        ['blue', 'yellow'].every((color) =>
          [this.color, passedColor].some((y) => y === color)
        )
      ) {
        return 'green';
      }
    };

    this.calibrate = (numArr) => {
      numArr.sort();
      this.calibrationSequence = numArr.map((x) => x * 3);
    };
  }
}
