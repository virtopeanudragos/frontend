import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface User {
  id: number;
  name: string;
  email: string;
  university: string;
  leader: boolean;
  team: any;
  attendances: any[];
  grades: any[];
}


@Injectable({
  providedIn: 'root'
})

export class UserProfileService {
  private userName = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getUserName() {
    return this.userName.asObservable();
  }

  updateUserName(name: string) {
    this.userName.next(name);
  }

  fetchNames(): Observable<string[]> {
    return this.http.get<User[]>('http://localhost:8080/student')
      .pipe(
        map(users => users.map(user => user.name))
      );
  }
}
