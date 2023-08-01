import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { map, tap  } from 'rxjs/operators';
import { LocalstorageService } from "./localstorage.service";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private studentDetailsUrl = 'http://localhost:8080/student/';

  private currentSelectedActivity = new BehaviorSubject<string | undefined>(undefined);
  currentSelectedActivity$ = this.currentSelectedActivity.asObservable();
  constructor(private http: HttpClient, private loginService: LoginService, private localStorageService: LocalstorageService) {}

  public getStudent(userId: number): Observable<any>{
    return  this.http.get<any>(this.studentDetailsUrl + userId);
  }

  setCurrentActivity(activity: string | undefined): void {
    this.currentSelectedActivity.next(activity);
    if (activity !== undefined) {
      this.localStorageService.setItem('currentActivity', activity.toString());
    } else {
      this.localStorageService.removeItem('currentActivity');
    }
  }

  // Getter method for currentUserId
  getCurrentActivity(): Observable<string | undefined> {
    const currentActivity = this.localStorageService.getItem('currentUserId');
    if (currentActivity !== null) {
      this.currentSelectedActivity.next(String(currentActivity));
    }
    return this.currentSelectedActivity$;
  }
}


