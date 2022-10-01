import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Cv from '../cv/models/cv.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  person= new Cv(
    1,
    'Bouhamed',
    'Feriel',
    21,
    '14328374',
    'Software Engineer',
      'feriel_image.jpg',
    "pink"
  );
  @Output() personChange = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.onChange();
  }

  onChange() {
    this.personChange.emit(
      this.person
    );
  }

}
