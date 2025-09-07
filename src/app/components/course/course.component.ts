import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  courseList = [
    { id: 1, name: 'Angular', tutor: 'Satish' },
    { id: 2, name: 'React', tutor: 'RSK' },
    { id: 3, name: 'Angular Material', tutor: 'Satish' },
    { id: 4, name: 'Bootstrap', tutor: 'Satish Konduru' },
    { id: 5, name: 'NodeJS', tutor: 'Renu' },
  ];
}
