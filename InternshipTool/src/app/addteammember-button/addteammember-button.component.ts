import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from "../login.service";
import { Subscription } from "rxjs";

type Role = 'Student' | 'Team Leader' | 'Mentor' | undefined;

@Component({
  selector: 'app-addteammember-button',
  templateUrl: './addteammember-button.component.html',
  styleUrls: ['./addteammember-button.component.css']
})
export class AddteammemberButtonComponent implements OnInit, OnDestroy{

  userRole: Role ;
  private roleSubscription: Subscription | undefined;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.roleSubscription = this.loginService.getCurrentUserRole().subscribe(role => {
      this.userRole = role;
    });
  }

  ngOnDestroy() {
    if (this.roleSubscription) {
      this.roleSubscription.unsubscribe();
    }
  }

}
