import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from "@angular/router";
import { Subscription } from 'rxjs';
import {LoginService} from "../login.service";

type Role = 'Student' | 'Team Leader' | 'Mentor' | undefined;


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, OnDestroy{
  userRole: Role ;
  private roleSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.roleSubscription = this.loginService.getCurrentUserRole().subscribe(role => {
      this.userRole = role;
    });
  }

  ngOnDestroy(): void {
    if (this.roleSubscription) {
      this.roleSubscription.unsubscribe();
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }

  logout(): void {
    this.loginService.setCurrentUserRole(undefined);
    this.router.navigate(['/login']);
  }


}
