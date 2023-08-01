import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-team-analytics-list',
  templateUrl: './team-analytics-list.component.html',
  styleUrls: ['./team-analytics-list.component.css']
})
export class TeamAnalyticsListComponent implements OnInit, OnDestroy {
  students: any[] = [];

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.getCurrentTeamId().subscribe(teamId => {
      if (teamId) {
        this.loginService.getStudents().subscribe(allStudents => {
          this.students = allStudents.filter(student => student.team && student.team.id === teamId);
        });
      }
    });
  }

  ngOnDestroy(): void {
  }
}
