import { Component, Input,  OnInit } from '@angular/core';
import {AnalyticsService} from "../analytics.service";
import { LoginService } from "../login.service";

interface Team{
  teamId: number;
  students: any;
}
@Component({
  selector: 'app-collapsible-mentor-sessions',
  templateUrl: './collapsible-mentor-sessions.component.html',
  styleUrls: ['./collapsible-mentor-sessions.component.css']
})
export class CollapsibleMentorSessionsComponent implements OnInit {
  @Input() team: any;
  teamName: string = '';
  isAnalyticsTableVisible: boolean = false;

  constructor(
    private analyticsService: AnalyticsService,
    private loginService: LoginService
  ) {}

  toggleAnalyticsTable(): void {
    this.isAnalyticsTableVisible = !this.isAnalyticsTableVisible;
  }

  ngOnInit(): void {
    this.teamName = 'Team: ' + this.team.teamId;
  }

  saveTeamData(): void {
    this.loginService.getCurrentUserId().subscribe(currentUserId => {
      for (const student of this.team.students) {
        const gradeDTO = {
          mentorId: currentUserId,
          grade: student.grade,
          comment: student.comment
        };
//@ts-ignore
        this.analyticsService.saveStudentData(student.studentId, student.sessionId, gradeDTO).subscribe(response => {
          console.log(response); // Do something with the response
        });
      }
    });
  }


}

