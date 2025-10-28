import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CanComponentDeactivate } from 'src/app/interfaces/can-component-deactivate';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements CanComponentDeactivate {
  // name = '';
  // saved = false;
  // save() {
  //   this.saved = true;
  //   alert('Profile saved successfully!');
  // }
  // // 👇 this method will be used by the CanDeactivate guard
  // hasUnsavedChanges(): boolean {
  //   return !this.saved;
  // }
  user = {
    name: 'Satish Konduru',
    email: 'satish@example.com',
    bio: 'Full Stack Developer',
  };

  isSaved = true;

  constructor(private dialog: MatDialog) {}

  onInputChange() {
    this.isSaved = false;
  }

  saveChanges() {
    this.isSaved = true;
    alert('Profile saved successfully!');
  }

  // This will be called by CanDeactivate Guard
  canDeactivate(): boolean | Observable<boolean> {
    if (this.isSaved) {
      return true;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Unsaved Changes',
        message:
          'You have unsaved changes. Do you really want to leave this page?',
      },
    });

    return dialogRef.afterClosed().pipe(map((result) => !!result));
  }
}
