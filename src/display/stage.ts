import Container from "./container"

export default class Stage extends Container {

  public get width(): number {
    return this._width;
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

  private _context: CanvasRenderingContext2D;

  constructor(
    private _canvas: HTMLCanvasElement,
    private _width?: number,
    private _height?: number) {
    super();
    this._context = this._canvas.getContext('2d');
    if (_width !== undefined) {
      _canvas.width = _width;
    }

    if (_height !== undefined) {
      _canvas.height = _height;
    }
  }
}
