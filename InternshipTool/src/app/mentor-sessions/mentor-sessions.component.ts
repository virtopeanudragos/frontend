import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-mentor-sessions',
  templateUrl: './mentor-sessions.component.html',
  styleUrls: ['./mentor-sessions.component.css']
})
export class MentorSessionsComponent implements OnInit {
  teams: any[] = [];

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {

    this.analyticsService.getTeams().subscribe((team) => {
      this.teams = team
        .map((teamData: {
          id: number;
          students: any;
        }) => ({
          teamId: teamData.id,
          students: teamData.students
        }))
    });
  }

}
