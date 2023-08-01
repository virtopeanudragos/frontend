import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkgradefeedback-dialogbox',
  templateUrl: './checkgradefeedback-dialogbox.component.html',
  styleUrls: ['./checkgradefeedback-dialogbox.component.css']
})
export class CheckgradefeedbackDialogboxComponent {
  constructor(
    public dialogRef: MatDialogRef<CheckgradefeedbackDialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
