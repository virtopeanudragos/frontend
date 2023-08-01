import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile-topbar',
  templateUrl: './user-profile-topbar.component.html',
  styleUrls: ['./user-profile-topbar.component.css']
})
export class UserProfileTopbarComponent implements OnInit, OnDestroy {

  userName: string | undefined;
  private nameSubscription: Subscription | undefined;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.nameSubscription = this.loginService.getCurrentUserName().subscribe(name => {
      this.userName = name;
    });
  }

  ngOnDestroy(): void {
    if (this.nameSubscription) {
      this.nameSubscription.unsubscribe();
    }
  }


}
