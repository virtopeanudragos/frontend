import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  // Using BehaviorSubject to make userName an Observable.
  private userName = new BehaviorSubject<string>('');

  constructor() { }

  // Method to get the current user name.
  getUserName() {
    return this.userName.asObservable();
  }

  // Method to update the current user name.
  updateUserName(name: string) {
    this.userName.next(name);
  }
}
