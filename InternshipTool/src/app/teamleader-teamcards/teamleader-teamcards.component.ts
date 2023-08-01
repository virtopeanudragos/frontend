import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-teamleader-teamcards',
  templateUrl: './teamleader-teamcards.component.html',
  styleUrls: ['./teamleader-teamcards.component.css']
})
export class TeamleaderTeamcardsComponent implements OnInit, OnDestroy {
  students: any[] = []; // This type should be more specific if possible.
  private teamIdSubscription: Subscription | undefined;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getCurrentTeamId().subscribe(teamId => {
      if (teamId) {
        this.loginService.getStudents().subscribe(allStudents => {
          this.students = allStudents.filter(student => student.team && student.team.id === teamId);
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.teamIdSubscription) {
      this.teamIdSubscription.unsubscribe();
    }
  }

  getStudents(teamId: number): void {
    this.loginService.getStudentsByTeamId(teamId).subscribe(students => {
      this.students = students;
    });
  }
}

