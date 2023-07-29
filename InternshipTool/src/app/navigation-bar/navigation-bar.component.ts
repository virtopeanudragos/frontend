import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from "@angular/router";
import { Subscription } from 'rxjs';
import { UserRoleService } from '../user-role.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  userRole: string = ''; // this should be set when the user logs in
  roleSubscription!: Subscription;
  constructor(private router: Router, private userRoleService: UserRoleService) {}

  ngOnInit() {
    this.roleSubscription = this.userRoleService.currentRole.subscribe(role => {
      this.userRole = role;
    });
  }

  ngOnDestroy() {
    this.roleSubscription.unsubscribe();
  }
  logout() {

    // clear the user role when logging out
    this.userRoleService.changeRole('');

    this.router.navigate(['/login']);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
