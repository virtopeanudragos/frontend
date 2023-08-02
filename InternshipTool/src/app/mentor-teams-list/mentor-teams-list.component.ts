import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from "../analytics.service";

interface Team{
  teamId: number;
  students: any;
}

@Component({
  selector: 'app-mentor-teams-list',
  templateUrl: './mentor-teams-list.component.html',
  styleUrls: ['./mentor-teams-list.component.css']
})
export class MentorTeamsListComponent implements OnInit{
  isDropdownOpen1 = false;
  isDropdownOpen2 = false;
  isDropdownOpen3 = false;
  isDropdownOpen4 = false;


  teams: Team[] = [];

  constructor(private analyticsService: AnalyticsService) {
  }

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
