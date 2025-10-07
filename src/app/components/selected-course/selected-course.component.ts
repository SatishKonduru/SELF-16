import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css'],
})
export class SelectedCourseComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  myCourse: any;
  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   const getParams = params.get('course');
    //   this.myCourse = JSON.parse(getParams);
    // });

    //OLD Method
    // this.activatedRoute.queryParams.subscribe((p) => {
    //   this.myCourse = JSON.parse(p['course']);
    // });

    this.activatedRoute.queryParamMap.subscribe((p) => {
      this.myCourse = JSON.parse(p.get('course'));
    });
  }
  goBack() {
    this.router.navigate(['/courseDetails', this.myCourse.id]);
  }
}
