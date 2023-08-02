import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { LocalstorageService } from "./localstorage.service";


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private activitiesUrl = 'http://localhost:8080/activities';


  private currentSelectedActivity = new BehaviorSubject<string | undefined>(undefined);
  currentSelectedActivity$ = this.currentSelectedActivity.asObservable();

  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService) { }

  getActivities(): Observable<any[]> {
    return this.http.get<any[]>(this.activitiesUrl);
  }

  createActivity(activityData: any): Observable<any> {
    return this.http.post<any>(this.activitiesUrl, activityData);
  }

  deleteActivity(id: number): Observable<any> {
    const url = `${this.activitiesUrl}/${id}`;
    return this.http.delete<any>(url);
  }


  // Setter method for currentActivity
  setCurrentActivity(activity: string | undefined): void {
    this.currentSelectedActivity.next(activity);
    if (activity !== undefined) {
      this.localStorageService.setItem('currentActivity', activity.toString());
    } else {
      this.localStorageService.removeItem('currentActivity');
    }
  }

  // Getter method for currentActivity
  getCurrentActivity(): Observable<string | undefined> {
    const currentActivity = this.localStorageService.getItem('currentActivity');
    if (currentActivity !== null) {
      this.currentSelectedActivity.next(String(currentActivity));
    }
    return this.currentSelectedActivity$;
  }


}
