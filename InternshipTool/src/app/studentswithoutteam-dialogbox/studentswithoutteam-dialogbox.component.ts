import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  studentsWithoutTeam: any[];
}
@Component({
  selector: 'app-studentswithoutteam-dialogbox',
  templateUrl: './studentswithoutteam-dialogbox.component.html',
  styleUrls: ['./studentswithoutteam-dialogbox.component.css']
})
export class StudentswithoutteamDialogboxComponent {
  constructor(
    public dialogRef: MatDialogRef<StudentswithoutteamDialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addStudent(student: any): void {
    this.dialogRef.close(student);
  }

}
