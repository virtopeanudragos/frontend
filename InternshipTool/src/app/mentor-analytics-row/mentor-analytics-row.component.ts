import {Component, Input} from '@angular/core';
import {AnalyticsService} from "../analytics.service";

interface StudentAnalytics{
  grade : number,
  sessionDate: string,
  activityName: string,
  feedback: string
}

@Component({
  selector: 'app-mentor-analytics-row',
  templateUrl: './mentor-analytics-row.component.html',
  styleUrls: ['./mentor-analytics-row.component.css']
})
export class MentorAnalyticsRowComponent {
  @Input() student: any ;

  constructor(private analyticsService: AnalyticsService) {}

  /*saveData(): void {
    this.analyticsService.saveStudentData(this.student).subscribe(() => {
    });
  }*/
}
