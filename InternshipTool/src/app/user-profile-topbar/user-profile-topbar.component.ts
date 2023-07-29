import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile-topbar',
  templateUrl: './user-profile-topbar.component.html',
  styleUrls: ['./user-profile-topbar.component.css']
})
export class UserProfileTopbarComponent implements OnInit, OnDestroy {
  userName: string ='';
  private nameSub!: Subscription;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.nameSub = this.userProfileService.getUserName().subscribe(name => {
      this.userName = name;
    });
  }

  ngOnDestroy() {
    if (this.nameSub) {
      this.nameSub.unsubscribe();
    }
  }


}
