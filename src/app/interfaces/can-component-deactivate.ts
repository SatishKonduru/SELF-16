export interface CanComponentDeactivate {
  canDeactivate: () =>
    | boolean
    | Promise<boolean>
    | import('rxjs').Observable<boolean>;
}
