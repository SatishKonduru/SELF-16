import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './components/test/test.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { TempRefVariablesComponent } from './components/temp-ref-variables/temp-ref-variables.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { SenderComponent } from './components/sender/sender.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { TopicComponent } from './components/topic/topic.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Parent2Component } from './components/parent2/parent2.component';
import { Child2Component } from './components/child2/child2.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuestionComponent } from './components/question/question.component';
import { ParentPanelComponent } from './components/parent-panel/parent-panel.component';
import { ChildPanelComponent } from './components/child-panel/child-panel.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalFooterComponent } from './components/modal-footer/modal-footer.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';
import { ModalBodyComponent } from './components/modal-body/modal-body.component';
import { StepComponent } from './components/step/step.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PermissionDirective } from './directives/permission.directive';
import { HomeComponent } from './components/home/home.component';
import { IfNotDirective } from './directives/if-not.directive';
import { RepeatDirective } from './directives/repeat.directive';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { DocsComponent } from './components/docs/docs.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { SelectedCourseDetailsComponent } from './components/selected-course-details/selected-course-details.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { DemoComponent } from './components/demo/demo.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized/unauthorized.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TempRefVariablesComponent,
    TwoWayDataBindingComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    SenderComponent,
    ReceiverComponent,
    TopicComponent,
    ViewChildComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    QuestionnaireComponent,
    QuestionComponent,
    ParentPanelComponent,
    ChildPanelComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    StepComponent,
    StepperComponent,
    HighlightDirective,
    PermissionDirective,
    HomeComponent,
    IfNotDirective,
    RepeatDirective,
    HeaderComponent,
    CourseComponent,
    CourseDetailsComponent,
    LoginComponent,
    DocsComponent,
    SelectedCourseComponent,
    SelectedCourseDetailsComponent,
    FileNotFoundComponent,
    DemoComponent,
    Comp1Component,
    Comp2Component,
    DashboardComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminSettingsComponent,
    UnauthorizedComponent,
    EditProfileComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
