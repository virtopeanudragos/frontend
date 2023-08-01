import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AnalyticsService} from "../analytics.service";
import {LoginService} from "../login.service";
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
  private studentAnalyticsSubscription: Subscription | undefined;

  constructor(private analyticsService: AnalyticsService, private loginService: LoginService) {
  }

  ngOnInit(): void {

    let userId: number;
    const userIdsubscription = this.loginService.getCurrentUserId().subscribe(
      // @ts-ignore
      (id: number) =>{
        userId=id;
      }
    )

    // @ts-ignore
    this.analyticsService.getStudent(userId).subscribe( student =>
      this.gradesData = student.grades.map((grade: {grade: number, session: {date: string, activity: {name: string}}}) => ({
        grade: grade.grade,
        sessionDate: grade.session.date,
        activityName: grade.session.activity.name
      }))
    )


  }

  ngOnDestroy(): void {

  }

}
