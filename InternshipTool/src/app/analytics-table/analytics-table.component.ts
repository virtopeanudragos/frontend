import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AnalyticsService} from "../analytics.service";
interface StudentAnalytics{
  grade : number,
  sessionDate: string
}

@Component({
  selector: 'app-analytics-table',
  templateUrl: './analytics-table.component.html',
  styleUrls: ['./analytics-table.component.css']
})


export class AnalyticsTableComponent implements OnInit, OnDestroy{
  gradesData: StudentAnalytics[] = [];
  private studentAnalyticsSubscription: Subscription | undefined;

  constructor(private analyticsService: AnalyticsService) {
  }

  ngOnInit(): void {
    this.analyticsService.getStudent().subscribe( student =>
      this.gradesData = student.grades.map((grade: {grade: number, session: {date: string}}) => ({
        grade: grade.grade,
        sessionDate: grade.session.date
      }))
    )

  }

  ngOnDestroy(): void {

  }

}
