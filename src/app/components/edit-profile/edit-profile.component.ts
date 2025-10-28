import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  name = '';
  saved = false;

  save() {
    this.saved = true;
    alert('Profile saved successfully!');
  }

  // 👇 this method will be used by the CanDeactivate guard
  hasUnsavedChanges(): boolean {
    return !this.saved;
  }
}
