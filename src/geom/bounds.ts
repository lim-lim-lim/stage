import Point from "./point";

export default class Bounds {

  public get width(): number {
    return this.maxX - this.minX;
  }

  public get height(): number {
    return this.maxY = this.minY;
  }

  constructor(
    public minX: number = 0,
    public minY: number = 0,
    public maxX: number = 0,
    public maxY: number = 0) {
  }

  public extendByBounds(bounds: Bounds): void {
    this.maxX = Math.max(this.maxX, bounds.minX + bounds.maxX);
    this.maxY = Math.max(this.maxY, bounds.minY + bounds.maxY);
    this.minX = Math.min(this.minX, bounds.minX);
    this.minY = Math.min(this.minY, bounds.minY);
  }

  public extendByPoint(point: Point): void {
    if (point.x > this.maxX) {
      this.maxX = point.x;
    } else if (point.x < this.minX) {
      this.minX = point.x;
    }

    if (point.y > this.maxY) {
      this.maxY = point.y;
    } else if (point.y < this.minY) {
      this.minY = point.y;
    }
  }

  public isIncludePoint(point: Point): boolean {
    return point.x >= this.minX && point.x <= this.maxX && point.y >= this.minY && point.y <= this.maxY;
  }

  public equal(bounds: Bounds): boolean {
    return this.minX === bounds.minX && this.maxX === bounds.maxX && this.minY === bounds.minY && this.maxY === bounds.maxY;
  }

  public copy(): Bounds {
    return new Bounds(this.minX, this.minY, this.maxX, this.maxY);
  }

  public getPoints(): Point[] {
    return [
      new Point(this.minX, this.minY),
      new Point(this.maxX, this.minY),
      new Point(this.maxX, this.maxY),
      new Point(this.minX, this.maxY)
    ]
  }
}