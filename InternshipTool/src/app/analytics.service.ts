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
  constructor(private http: HttpClient, private loginService: LoginService) {}

  public getStudent(): Observable<any>{
    const userId = this.loginService.getCurrentUserId();
    console.log('User ID:' + userId);
    return  this.http.get<any>('http://localhost:8080/student/1014');
  }
}


