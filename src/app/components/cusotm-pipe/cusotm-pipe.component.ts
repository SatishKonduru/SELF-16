import { Component } from '@angular/core';

@Component({
  selector: 'app-cusotm-pipe',
  templateUrl: './cusotm-pipe.component.html',
  styleUrls: ['./cusotm-pipe.component.css'],
})
export class CusotmPipeComponent {
  name = 'Satish';
  // score = 777;
  score: any;
  total = 1000;
  filterText = 'all';
  students = [
    { name: 'Satish', age: 45, gender: 'Male' },
    { name: 'Renu', age: 37, gender: 'Female' },
    { name: 'RSK', age: 44, gender: 'Male' },
    { name: 'Micky', age: 20, gender: 'Female' },
  ];
  onClick(marks: any) {
    this.score = marks;
  }
}
