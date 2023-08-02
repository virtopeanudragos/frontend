import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AnalyticsService} from "../analytics.service";
import {Subscription} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {
  CheckgradefeedbackDialogboxComponent
} from "../checkgradefeedback-dialogbox/checkgradefeedback-dialogbox.component";


@Component({
  selector: 'app-student-analytics-row',
  templateUrl: './student-analytics-row.component.html',
  styleUrls: ['./student-analytics-row.component.css']
})

export class StudentAnalyticsRowComponent implements OnInit{
  @Input() grade: any;
  @Input() session: any;

ngOnInit() {
  if(this.grade == null){
    this.grade = {
      grade : "-",
      attendance : false,
      sessionId: this.session.id,
      sessionDate: this.session.date,
      activityName: this.session.activity,
      feedback: " "
    }
  }
}

  constructor(private dialog: MatDialog) {}

  openGradeDetailsDialog() {
    this.dialog.open(CheckgradefeedbackDialogboxComponent, {
      data: { gradeDetails: this.grade.feedback }, // Pass the data to the dialog
    });
  }

}
