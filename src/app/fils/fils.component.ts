import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
      @Input() color: string;
      myFavoriteColor : string = 'red';
      @Output() colorChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  changeFatherColor(){
    this.colorChange.emit(this.myFavoriteColor);
  }
}
