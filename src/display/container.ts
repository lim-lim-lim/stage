import Display from "./display"

export default class Container extends Display {

  private _childs: Set<Display> = new Set<Display>();

  public get childs(): Set<Display> {
    return this._childs;
  }

  constructor() {
    super();
  }

  public addChild(display: Display): void {
    this._childs.add(display);
  }

  public removeChild(display: Display): void {
    this._childs.delete(display);
  }
}