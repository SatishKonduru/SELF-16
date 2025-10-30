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
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized/unauthorized.component';
import { AdminGuard } from './admin/admin.guard';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import { CusotmPipeComponent } from './components/cusotm-pipe/cusotm-pipe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full', // <-- this ensures exact empty path match
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
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
    path: 'admin',
    canActivateChild: [AdminGuard],
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'users',
        component: AdminUsersComponent,
      },
      {
        path: 'settings',
        component: AdminSettingsComponent,
      },
    ],
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'built-in-pipes',
    component: BuiltInPipesComponent,
  },
  {
    path: 'custom-pipe',
    component: CusotmPipeComponent,
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
