import { Component, OnInit } from '@angular/core';
import { Colorpatch } from '../models/colorpatch/colorpatch';
import { Custompatch } from '../models/colorpatch/custompatch';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css']
})
  
  

export class ColorpickerComponent implements OnInit {

  defaultpatch = new Colorpatch(0, 0, 0, 1, "black");
  custompatch = new Custompatch(255, 255, 255, 1, "white");
  currentpatch = new Custompatch(0, 0, 0, 1, "");

  patchArray: Colorpatch[] | Custompatch[] = [];

  colorname = "kleurnaam";
  submitPrompt = "Voeg kleur toe";

  localTxt = [
    { "colorName": "kleurnaam" },
    {"submitPrompt": "Voeg kleur toe"}
  ]

  constructor() { }


  ngOnInit(): void {

    this.custompatch.r = 222;
    console.log(this.custompatch.rgba, this.custompatch.name, this.defaultpatch.rgba, this.defaultpatch.name);

    this.patchArray.push(this.custompatch);
    this.patchArray.push(this.defaultpatch);

  }

  onAddColorpatch() {
    this.patchArray.push(this.currentpatch);
    this.currentpatch = new Custompatch(0, 0, 0, 1, "");
  }

} 
