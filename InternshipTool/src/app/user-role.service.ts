import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private roleSource = new BehaviorSubject<string>('');
  currentRole = this.roleSource.asObservable();

  constructor() { }


  changeRole(role: string) {
    this.roleSource.next(role);
  }
}
