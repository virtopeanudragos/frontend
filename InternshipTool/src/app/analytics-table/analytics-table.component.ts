import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AnalyticsService} from "../analytics.service";
import {LoginService} from "../login.service";
import {LocalstorageService} from "../localstorage.service";
import {ActivitiesService} from "../activities.service";
interface StudentAnalytics{
  grade : number,
  attendance : boolean,
  sessionId: number,
  sessionDate: string,
  activityName: string,
  feedback: string
}
interface SessionDetails{
  id: number,
  date: string,
  activity: string
}

@Component({
  selector: 'app-analytics-table',
  templateUrl: './analytics-table.component.html',
  styleUrls: ['./analytics-table.component.css']
})


export class AnalyticsTableComponent implements OnInit, OnDestroy{

  @Input() id: any;
  gradesData: StudentAnalytics[] = [];
  sessions: SessionDetails[] = [];

  constructor(private analyticsService: AnalyticsService, private loginService: LoginService, private activityService: ActivitiesService) {
  }

  ngOnInit(): void {

    let userId: number;
    if(this.id == null) {
      const userIdsubscription = this.loginService.getCurrentUserId().subscribe(
        // @ts-ignore
        (id: number) => {
          userId = id;
        }
      )
    }else {
      userId = this.id;
    }

    let currentActivity: String;
    const currentActivitySubscription = this.activityService.getCurrentActivity().subscribe(
      // @ts-ignore
      (activity: String) =>{
        currentActivity = activity;
      }
    )

    // @ts-ignore
    this.analyticsService.getStudent(userId).subscribe((student) => {
      //@ts-ignore
      const attendanceMap = new Map(student.attendances.map(attendance => [attendance.session.date, attendance.attended]));
      this.gradesData = student.grades
        .map((grade: {
          grade: number;
          comment: string;
          session: {id: number, date: string; activity: { name: string }; feedback: string };
        }) => ({
          grade: grade.grade,
          sessionId: grade.session.id,
          sessionDate: grade.session.date,
          activityName: grade.session.activity.name,
          feedback: grade.comment,
          attendance: attendanceMap.get(grade.session.date)  // change 'attended' to 'attendance'
        }))
        // @ts-ignore
        .filter((grade) => grade.activityName === currentActivity && grade.feedback);
    });

    this.analyticsService.getSessions().subscribe( (session) =>{
      this.sessions = session
        .map((sessionData: {
          id: number;
          date: string;
          activity: { name: string };
        }) => ({
          id: sessionData.id,
          date: sessionData.date,
          activity: sessionData.activity.name
          // @ts-ignore
        })).filter((session) => session.activity === currentActivity && !this.hasItemWithKeyAndValue(this.gradesData, "sessionId", session.id))
    });

  }

  ngOnDestroy(): void {

  }

  hasItemWithKeyAndValue(arr: any[], key: string, value: number){
    return arr.some(item => item[key] === value);
  }
}
