import {Component, Input, OnInit} from '@angular/core';
import {ActivitiesService} from "../activities.service";
import {LoginService} from "../login.service";
import {AnalyticsService} from "../analytics.service";

interface StudentAnalytics{
  grade : number,
  sessionDate: string,
  activityName: string,
  feedback: string
}

@Component({
  selector: 'app-collapsible-studentanalytics',
  templateUrl: './collapsible-studentanalytics.component.html',
  styleUrls: ['./collapsible-studentanalytics.component.css']
})
export class CollapsibleStudentanalyticsComponent{
  @Input() student: any ;
  isAnalyticsTableVisible: boolean = false;

  gradesData: StudentAnalytics[] = [];

  constructor() {
  }

  toggleAnalyticsTable(): void {
    this.isAnalyticsTableVisible = !this.isAnalyticsTableVisible;
    }

}
