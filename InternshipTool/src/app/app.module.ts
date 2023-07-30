import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserRoleService } from './user-role.service';
import { UserProfileService } from "./user-profile.service";
import { HttpClientModule } from '@angular/common/http';





import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentAnalyticsRowComponent } from './student-analytics-row/student-analytics-row.component';
import { IbmLogoComponent } from './ibm-logo/ibm-logo.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { UserProfileTopbarComponent } from './user-profile-topbar/user-profile-topbar.component';
import { StudentAnalyticsComponent } from './student-analytics/student-analytics.component';
import { SelectActivityComponent } from './select-activity/select-activity.component';
import { AnalyticsTableComponent } from './analytics-table/analytics-table.component';
import { TeamleaderMyteamComponent } from './teamleader-myteam/teamleader-myteam.component';
import { AddteammemberButtonComponent } from './addteammember-button/addteammember-button.component';
import { TeamleaderTeamcardsComponent } from './teamleader-teamcards/teamleader-teamcards.component';
import { TeamleaderAnalyticsComponent } from './teamleader-analytics/teamleader-analytics.component';
import { TeamleaderTeamanalyticsComponent } from './teamleader-teamanalytics/teamleader-teamanalytics.component';
import { TeamAnalyticsListComponent } from './team-analytics-list/team-analytics-list.component';
import { MentorTeamsComponent } from './mentor-teams/mentor-teams.component';
import { MentorTeamsListComponent } from './mentor-teams-list/mentor-teams-list.component';
import { CollapsibleStudentanalyticsComponent } from './collapsible-studentanalytics/collapsible-studentanalytics.component';
import { CollapsibleTeamslistComponent } from './collapsible-teamslist/collapsible-teamslist.component';
import { MentorActivitiesComponent } from './mentor-activities/mentor-activities.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AddactivityButtonComponent } from './addactivity-button/addactivity-button.component';
import { MentorAnalyticsRowComponent } from './mentor-analytics-row/mentor-analytics-row.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MentorSessionsComponent } from './mentor-sessions/mentor-sessions.component';
import { CollapsibleMentorSessionsComponent } from './collapsible-mentor-sessions/collapsible-mentor-sessions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoute: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'student-analytics', component: StudentAnalyticsComponent},
  {path: 'leader-team', component: TeamleaderMyteamComponent},
  {path: 'leader-analytics', component: TeamleaderAnalyticsComponent},
  {path: 'leader-teamAnalytics', component: TeamleaderTeamanalyticsComponent},
  {path: 'mentor-teams', component: MentorTeamsComponent},
  {path: 'mentor-activities', component: MentorActivitiesComponent},
  {path: 'mentor-sessions', component:MentorSessionsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentCardComponent,
    StudentAnalyticsRowComponent,
    IbmLogoComponent,
    LoginCardComponent,
    UserProfileTopbarComponent,
    StudentAnalyticsComponent,
    SelectActivityComponent,
    AnalyticsTableComponent,
    TeamleaderMyteamComponent,
    AddteammemberButtonComponent,
    TeamleaderTeamcardsComponent,
    TeamleaderAnalyticsComponent,
    TeamleaderTeamanalyticsComponent,
    TeamAnalyticsListComponent,
    MentorTeamsComponent,
    MentorTeamsListComponent,
    CollapsibleStudentanalyticsComponent,
    CollapsibleTeamslistComponent,
    MentorActivitiesComponent,
    ActivitiesComponent,
    AddactivityButtonComponent,
    MentorAnalyticsRowComponent,
    NavigationBarComponent,
    MentorSessionsComponent,
    CollapsibleMentorSessionsComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    UserRoleService,
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
