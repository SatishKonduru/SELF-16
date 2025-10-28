import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../interfaces/can-component-deactivate';

@Injectable({
  providedIn: 'root',
})
// export class CanDeactivateGuard implements CanDeactivate<EditProfileComponent> {
//   canDeactivate(component: EditProfileComponent): boolean {
//     if (component.hasUnsavedChanges()) {
//       return confirm('You have unsaved changes. Do you really want to leave?');
//     }
//     return true; // allow navigation if no unsaved changes
//   }
// }
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(
    component: CanComponentDeactivate
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
