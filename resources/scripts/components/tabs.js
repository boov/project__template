export default class Tabs {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  static calcArea() {
    return this.height * this.width;
  }
};
