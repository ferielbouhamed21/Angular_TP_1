import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  persons: Array<any>;
  @Output() selectedPerson = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  selectPerson(person: any){
    this.selectedPerson.emit(person);
  }

}
