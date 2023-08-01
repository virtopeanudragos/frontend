import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-addactivity-form',
  templateUrl: './addactivity-form.component.html',
  styleUrls: ['./addactivity-form.component.css']
})
export class AddactivityFormComponent {
  name!: string;
  description!: string;

  constructor(
    public dialogRef: MatDialogRef<AddactivityFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onSave(): void {
    // You can do something with the name and description here
    this.dialogRef.close({ name: this.name, description: this.description });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
