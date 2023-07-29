import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsible-studentanalytics',
  templateUrl: './collapsible-studentanalytics.component.html',
  styleUrls: ['./collapsible-studentanalytics.component.css']
})
export class CollapsibleStudentanalyticsComponent {
  studentName: string = 'Student name'; // Set the default student name here
  isAnalyticsTableVisible: boolean = false;

  toggleAnalyticsTable(): void {
    this.isAnalyticsTableVisible = !this.isAnalyticsTableVisible;
  }
}
