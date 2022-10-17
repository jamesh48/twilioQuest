class Materializer {
  activated = false;
  constructor(target) {
    this.target = target;
    this.activate = () => {
      this.activated = true;
    };

    this.materialize = () => {
      if (this.activated) {
        return this.target;
      }
    };
  }
}
