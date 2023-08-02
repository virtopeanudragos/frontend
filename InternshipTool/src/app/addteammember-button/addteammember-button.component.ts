import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from "../login.service";
import { Subscription } from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {
  StudentswithoutteamDialogboxComponent
} from "../studentswithoutteam-dialogbox/studentswithoutteam-dialogbox.component";

type Role = 'Student' | 'Team Leader' | 'Mentor' | undefined;

@Component({
  selector: 'app-addteammember-button',
  templateUrl: './addteammember-button.component.html',
  styleUrls: ['./addteammember-button.component.css']
})
export class AddteammemberButtonComponent implements OnInit, OnDestroy{

  userRole: Role;
  studentsWithoutTeam: any[] = [];
  showPopup: boolean = false;
  private roleSubscription: Subscription | undefined;
  currentTeamId: number | undefined;


  constructor(
    private loginService: LoginService,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.roleSubscription = this.loginService.getCurrentUserRole().subscribe(role => {
      this.userRole = role;
    });

    this.loginService.getCurrentTeamId().subscribe(id => {
      this.currentTeamId = id;
    });
  }

  openPopup(): void {
    this.loginService.getStudentsWithoutTeam().subscribe(students => {
      const dialogRef = this.dialog.open(StudentswithoutteamDialogboxComponent, {
        width: '250px',
        data: {studentsWithoutTeam: students}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result) { // if user clicked Add
          this.addStudentToTeam(result);
        }
      });
    });
  }

  addStudentToTeam(student: any): void {
    // @ts-ignore
    this.loginService.addStudentToTeam(student.id, this.currentTeamId).subscribe(() => {
      this.showPopup = false;
      this.refreshStudents();
    });
  }

  refreshStudents(): void {
    // @ts-ignore
    this.loginService.getStudentsByTeamId(this.loginService.getCurrentTeamId()).subscribe(students => {
      this.studentsWithoutTeam = students;
    });
  }


  ngOnDestroy() {
    if (this.roleSubscription) {
      this.roleSubscription.unsubscribe();
    }
  }

}
