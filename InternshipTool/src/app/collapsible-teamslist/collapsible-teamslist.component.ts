import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsible-teamslist',
  templateUrl: './collapsible-teamslist.component.html',
  styleUrls: ['./collapsible-teamslist.component.css']
})
export class CollapsibleTeamslistComponent {
  studentName: string = 'Team name'; // Set the default student name here
  isAnalyticsTableVisible: boolean = false;

  toggleAnalyticsTable(): void {
    this.isAnalyticsTableVisible = !this.isAnalyticsTableVisible;
  }
}
