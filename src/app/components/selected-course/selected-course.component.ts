import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css'],
})
export class SelectedCourseComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  myCourse: any;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const getParams = params.get('course');
      this.myCourse = JSON.parse(getParams);
    });
  }
}
