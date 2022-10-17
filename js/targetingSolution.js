class TargetingSolution {
  constructor(input) {
    this.x = input.x;
    this.y = input.y;
    this.z = input.z;

    this.target = () => {
      return `(${this.x}, ${this.y}, ${this.z})`;
    };
  }
}

const sln = new TargetingSolution({
  x: 45,
  y: 12,
  z: -1,
});

console.log(sln.target()); // Should output a string of (45, 12, -1)
