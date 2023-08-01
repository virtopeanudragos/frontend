import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private activitiesUrl = 'http://localhost:8080/activities';

  constructor(private http: HttpClient) { }

  getActivities(): Observable<any[]> {
    return this.http.get<any[]>(this.activitiesUrl);
  }

  createActivity(activityData: any): Observable<any> {
    return this.http.post<any>(this.activitiesUrl, activityData);
  }

}
