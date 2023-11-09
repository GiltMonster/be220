import { Component, OnInit } from '@angular/core';
import { fakeData } from "../../../utils/dataMockup";


@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss'],
})
export class ProgramasComponent  implements OnInit {

  public myData = fakeData;

  constructor() { }

  ngOnInit() {}

  upFont(str: string){
    return str.toUpperCase();
  }

}
