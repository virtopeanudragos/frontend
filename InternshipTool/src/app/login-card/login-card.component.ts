import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

type Role = 'Student' | 'Team Leader' | 'Mentor';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {
  selectedRole!: Role;
  selectedName: string = '';
  names: string[] = [];

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  onRoleSelect() {
    this.names = [];

    switch (this.selectedRole) {
      case 'Student':
        this.loginService.getStudents().subscribe(students => {
          const nonLeaderStudents = students.filter(student => !student.leader);
          this.names = nonLeaderStudents.map(student => student.name);
        });
        break;
      case 'Team Leader':
        this.loginService.getTeamLeaders().subscribe(leaders => {
          this.names = leaders.map(leader => leader.name);
        });
        break;
      case 'Mentor':
        this.loginService.getMentors().subscribe(mentors => {
          this.names = mentors.map(mentor => mentor.name);
        });
        break;
      default:
        break;
    }

    this.selectedName = '';
  }

  login() {
    if (!this.selectedRole || !this.selectedName) {
      alert('Please select both role and name');
      return;
    }

    this.loginService.setCurrentUserRole(this.selectedRole);
    this.loginService.setCurrentUserName(this.selectedName);

    if (this.selectedRole === 'Student' || this.selectedRole === 'Team Leader') {
      this.loginService.getStudentByName(this.selectedName).subscribe(student => {
        if (student && student.team) {
          this.loginService.setCurrentTeamId(student.team.id);
          this.loginService.setCurrentUserId(student.id);
        }
      });
    } else if (this.selectedRole === 'Mentor') {
      this.loginService.getMentorByName(this.selectedName).subscribe(mentor => {
        if (mentor) {
          this.loginService.setCurrentUserId(mentor.id);
        }
      });
    }

      switch (this.selectedRole) {
        case 'Student':
        case 'Team Leader':
          this.router.navigate(['/leader-team'], {queryParams: {name: this.selectedName}});
          break;
        case 'Mentor':
          this.router.navigate(['/mentor-teams'], {queryParams: {name: this.selectedName}});
          break;
        default:
          break;
      }
    }

}
