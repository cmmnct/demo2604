export class Colorpatch {
  constructor(
    protected _r: number,
    protected _g: number,
    protected _b: number,
    protected _a: number,
    protected _name: string
  ) {}

  public get r(): number {
    console.log(this._r);
    return this._r;
  }
  public get g(): number {
    return this._g;
  }
  public get b(): number {
    return this._b;
  }
  public get a(): number {
    return this._a;
  }
  public get name(): string {
    return this._name;
  }

  public get rgba(): string {
    return `rgba(${this._r},${this._g},${this._b},${this._a})`;
  }
}
