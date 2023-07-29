import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsible-mentor-sessions',
  templateUrl: './collapsible-mentor-sessions.component.html',
  styleUrls: ['./collapsible-mentor-sessions.component.css']
})
export class CollapsibleMentorSessionsComponent {
  teamName: string = 'Team name'; // Set the default student name here
  isAnalyticsTableVisible: boolean = false;

  toggleAnalyticsTable(): void {
    this.isAnalyticsTableVisible = !this.isAnalyticsTableVisible;
  }

}
