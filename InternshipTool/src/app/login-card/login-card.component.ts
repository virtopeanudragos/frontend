import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoleService } from '../user-role.service';
import { UserProfileService } from "../user-profile.service";


@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent {
  selectedRole: string = '';
  selectedName: string = '';
  names: string[] = ['Andrei', 'Gabriel', 'Beni', 'Adelin', 'Dragoș'];

  constructor(private userProfileService: UserProfileService, private userRoleService: UserRoleService, private router: Router) {}

  login() {
    this.userProfileService.updateUserName(this.selectedName);
    this.userRoleService.changeRole(this.selectedRole);

    if (!this.selectedRole || !this.selectedName) {
      alert('Please select both role and name');
      return;
    }

    switch(this.selectedRole) {
      case 'Student':
        this.router.navigate(['/leader-team'], { queryParams: { name: this.selectedName } });
        break;
      case 'Team Leader':
        this.router.navigate(['/leader-team'], { queryParams: { name: this.selectedName } });
        break;
      case 'Mentor':
        this.router.navigate(['/mentor-teams'], { queryParams: { name: this.selectedName } });
        break;
      default:
        break;
    }
  }
}
