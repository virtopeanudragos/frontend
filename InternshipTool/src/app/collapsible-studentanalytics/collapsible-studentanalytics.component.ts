import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapsible-studentanalytics',
  templateUrl: './collapsible-studentanalytics.component.html',
  styleUrls: ['./collapsible-studentanalytics.component.css']
})
export class CollapsibleStudentanalyticsComponent{
  @Input() student: any;
  isAnalyticsTableVisible: boolean = false;

  toggleAnalyticsTable(): void {
    this.isAnalyticsTableVisible = !this.isAnalyticsTableVisible;
  }

}
