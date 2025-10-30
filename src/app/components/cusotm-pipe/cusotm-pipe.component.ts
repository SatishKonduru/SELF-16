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
  filterText: any;
  filteredData: any;
  students = [
    { name: 'Satish', age: 45, gender: 'Male' },
    { name: 'Renu', age: 37, gender: 'Female' },
    { name: 'RSK', age: 44, gender: 'Male' },
    { name: 'Micky', age: 20, gender: 'Female' },
  ];
  onClick(marks: any) {
    this.score = marks;
  }
  onSelect(e: any) {
    this.filterText = e.value;
    // if (this.filterText === 'all') {
    //   this.filteredData = this.students;
    // } else {
    //   this.filteredData = this.students.filter(
    //     (s) => s.gender === this.filterText
    //   );
    // }
  }
  addNewStudent() {
    const newStudent = {
      name: 'Chikkie',
      age: 13,
      gender: 'Female',
    };
    this.students.push(newStudent);
  }
}
