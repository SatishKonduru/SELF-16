import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  courseList = [
    { id: 1, name: 'Angular', tutor: 'Satish' },
    { id: 2, name: 'React', tutor: 'RSK' },
    { id: 3, name: 'Angular Material', tutor: 'Satish' },
    { id: 4, name: 'Bootstrap', tutor: 'Satish Konduru' },
    { id: 5, name: 'NodeJS', tutor: 'Renu' },
  ];
  courseKeys: string[] = [];
  courseId: number;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params) {
        this.courseId = parseInt(params.get('id'));
      }
    });
    this.courseKeys = Object.keys(this.courseList[0]);
  }

  onSelect(id: any) {
    console.log('Selected Course: ', id);
    this.router.navigate(['/selectedCourse', JSON.stringify(id)]);
    // this.router.navigate(['/selectedCourse'], {
    //   queryParams: { course: JSON.stringify(course) },
    // });
  }
}


