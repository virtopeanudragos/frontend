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

ngOnInit() {
}

  constructor(private dialog: MatDialog) {}

  openGradeDetailsDialog() {
    this.dialog.open(CheckgradefeedbackDialogboxComponent, {
      data: { gradeDetails: this.grade.feedback }, // Pass the data to the dialog
    });
  }

}
