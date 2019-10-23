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
}