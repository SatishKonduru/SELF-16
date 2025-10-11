import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css'],
})
export class SelectedCourseComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  myCourseID: any;

  snapshotCourseID: any; // 👈 add this
  ngOnInit() {
    // ✅ Live updates with subscribe()
    this.activatedRoute.paramMap.subscribe((params) => {
      const data = params.get('id');
      if (data) {
        this.myCourseID = parseInt(data);
      }
    });

    // ❌ Snapshot (only once when component is created)
    const snapshotData = this.activatedRoute.snapshot.paramMap.get('id');
    if (snapshotData) {
      this.snapshotCourseID = parseInt(snapshotData);
    }

    //OLD Method
    // this.activatedRoute.queryParams.subscribe((p) => {
    //   this.myCourse = JSON.parse(p['course']);
    // });

    // this.activatedRoute.queryParamMap.subscribe((p) => {
    //   this.myCourse = JSON.parse(p.get('course'));
    // });
  }
  goBack() {
    this.router.navigate(['/courseDetails', this.myCourseID]);
  }
  viewDetails() {
    this.router.navigate(['selectedCourseDetails'], {
      relativeTo: this.activatedRoute,
    });
  }
  previousCourse() {
    const prevId = parseInt(this.myCourseID) - 1;
    if (prevId < 1) return alert('No previous course!');

    this.router.navigate(['/selectedCourse', JSON.stringify(prevId)]);
  }

  nextCourse() {
    const nextId = parseInt(this.myCourseID) + 1;
    if (nextId > 5) return alert('No next course!');

    this.router.navigate(['/selectedCourse', JSON.stringify(nextId)]);
  }
}
