import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Cv from '../models/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() person: Cv; 
  @Output() selectedItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.selectedItem.emit(
      this.person
    );
  }

}
