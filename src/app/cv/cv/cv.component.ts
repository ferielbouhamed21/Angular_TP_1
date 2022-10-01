import { Component, OnInit } from '@angular/core';
import Cv from '../models/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  persons = [
    new Cv(
      1,
      'Bouhamed',
      'Feriel',
      21,
      '14328374',
      'Software Engineer',
      'feriel_image.jpg',
      "pink"
    ),
    new Cv(
      2,
      'Khayati',
      'Mohamed Aziz',
      21,
      '14328374',
      'Software Engineer',
      'med_aziz.png',
    ),

  ];
  selectedPerson: Cv;
  constructor() { }

  ngOnInit(): void {
    this.selectPerson(this.persons[1])
  }

  selectPerson(person: Cv) {
    this.selectedPerson = person;
  }
}
