import { Component, OnInit } from '@angular/core';
import { fakeData } from "../../../utils/dataMockup";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent  implements OnInit {

  public myData = fakeData;
  constructor() { }

  ngOnInit() {}

  upFont(str: string){
    return str.toUpperCase();
  }

}
