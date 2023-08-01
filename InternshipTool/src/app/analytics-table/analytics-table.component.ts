import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AnalyticsService} from "../analytics.service";
import {LoginService} from "../login.service";
import {LocalstorageService} from "../localstorage.service";
import {ActivitiesService} from "../activities.service";
interface StudentAnalytics{
  grade : number,
  sessionDate: string,
  activityName: string
}

@Component({
  selector: 'app-analytics-table',
  templateUrl: './analytics-table.component.html',
  styleUrls: ['./analytics-table.component.css']
})


export class AnalyticsTableComponent implements OnInit, OnDestroy{
  gradesData: StudentAnalytics[] = [];

  constructor(private analyticsService: AnalyticsService, private loginService: LoginService, private activityService: ActivitiesService) {
  }

  ngOnInit(): void {

    let userId: number;
    const userIdsubscription = this.loginService.getCurrentUserId().subscribe(
      // @ts-ignore
      (id: number) =>{
        userId=id;
      }
    )

    let currentActivity: String;
    const currentActivitySubscription = this.activityService.getCurrentActivity().subscribe(
      // @ts-ignore
      (activity: String) =>{
        currentActivity = activity;
      }
    )

    // @ts-ignore
    this.analyticsService.getStudent(userId).subscribe( student =>
      this.gradesData = student.grades.map((grade: {grade: number, session: {date: string, activity: {name: string}}}) => ({
        grade: grade.grade,
        sessionDate: grade.session.date,
        activityName: grade.session.activity.name
        // @ts-ignore
      })).filter(grade => grade.activityName === currentActivity)
    )


  }

  ngOnDestroy(): void {

  }
}
