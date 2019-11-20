import Container from "./container"

export default class Stage extends Container {

  public get width(): number {
    return this.width;
  }

  public set width(value: number) {
    this._width = value;
  }

  public get height(): number {
    return this._height;
  }

  public set height(value: number) {
    this._height = value;
  }

  public get backgroundColor(): string {
    return this._backgroundColor;
  }

  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }

  private _context: CanvasRenderingContext2D;
  private _backgroundColor: string = '#000000';

  constructor(
    private _canvas: HTMLCanvasElement,
    private _width?: number,
    private _height?: number) {
    super();
    this._context = this._canvas.getContext('2d');
    if (_width === undefined) {
      this._width = _canvas.width;
    }

    if (_height == undefined) {
      this._height = _canvas.height;
    }
  }

  public update(): void {
    this._context.clearRect(0, 0, this._width, this._height);
    this._context.fillStyle = this._backgroundColor;
    this._context.fillRect(0, 0, this._width, this._height);
  }
}
