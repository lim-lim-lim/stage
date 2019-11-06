export default class Point {
  constructor(public x: number = 0, public y: number = 0) {

  }

  public equal(point: Point): boolean {
    return point.x === this.x && point.y === this.y;
  }

  public copy(): Point {
    return new Point(this.x, this.y);
  }
}