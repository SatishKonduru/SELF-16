import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DocsComponent } from './components/docs/docs.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { SelectedCourseDetailsComponent } from './components/selected-course-details/selected-course-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/course',
    pathMatch: 'full', // <-- this ensures exact empty path match
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'courseDetails',
    component: CourseDetailsComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
  },

  {
    path: 'selectedCourse/:id',
    component: SelectedCourseComponent,
    children: [
      {
        path: 'selectedCourseDetails',
        component: SelectedCourseDetailsComponent,
      },
    ],
  },
  {
    path: 'selectedCourse',
    component: SelectedCourseComponent,
  },
  {
    path: 'courseDetails/:id',
    component: CourseDetailsComponent,
  },

  {
    path: '**',
    component: FileNotFoundComponent,
  },
];
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // ✅ enables fragment navigation
  scrollOffset: [0, 64], // optional: add top padding for fixed headers
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
