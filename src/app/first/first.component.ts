import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  color='red';
  defaultColor='blue';
  person : any;

  constructor() { }

  ngOnInit(): void {
  }
  
  setDefaultColor(){
    this.color=this.defaultColor;
  }
  changeColor(input: string ){
    this.color=input;
  }
  changeChildColor(input: string ){
    this.color=input;
  }

  setPerson(person: any){
    this.person=person;
  }
}
