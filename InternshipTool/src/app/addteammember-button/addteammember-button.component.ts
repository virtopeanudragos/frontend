import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserRoleService } from '../user-role.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-addteammember-button',
  templateUrl: './addteammember-button.component.html',
  styleUrls: ['./addteammember-button.component.css']
})
export class AddteammemberButtonComponent implements OnInit, OnDestroy {

  userRole: string = ''; // this should be set when the user logs in
  roleSubscription!: Subscription;
  constructor(private userRoleService: UserRoleService) {}

  ngOnInit() {
    this.roleSubscription = this.userRoleService.currentRole.subscribe(role => {
      this.userRole = role;
    });
  }

  ngOnDestroy() {
    this.roleSubscription.unsubscribe();
  }

}
