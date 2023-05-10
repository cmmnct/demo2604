import { Colorpatch } from "./colorpatch";

export class Custompatch extends Colorpatch{
    constructor( r:number,  g:number, b:number, a:number, name:string) {
        super(r, g, b, a, name);
    }

    public override set r(v : number) {
        this._r = v;
    }
    public override set g(v : number) {
        this._g = v;
    }
    public override set b(v : number) {
        this._b = v;
    }
    public override set a(v : number) {
        this._a = v;
    }
    public override set name(v : string) {
        this._name = v;
    }
    
    public override get r() :number {
        return this._r
    }
    public override get g() :number {
        return this._g
    }
    public override get b() :number {
        return this._b
    }
    public override get a() :number {
        return this._a
    }
    public override get name() :string {
        return this._name
    }
    
    
}