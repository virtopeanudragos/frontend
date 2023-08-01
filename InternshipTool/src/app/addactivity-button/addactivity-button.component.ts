import { Component, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddactivityFormComponent} from "../addactivity-form/addactivity-form.component";
import { ActivitiesService } from "../activities.service";


@Component({
  selector: 'app-addactivity-button',
  templateUrl: './addactivity-button.component.html',
  styleUrls: ['./addactivity-button.component.css']
})

export class AddactivityButtonComponent {
  constructor(
    public dialog: MatDialog,
    private activitiesService: ActivitiesService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddactivityFormComponent, {
      width: '300px', // Set the width of the dialog as per your requirement
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createActivity(result.name, result.description);
      }
    });
  }

  createActivity(name: string, description: string): void {
    const activityData = { name, description };
    this.activitiesService.createActivity(activityData).subscribe(
      response => {
        console.log('Activity created:', response);
        // You can handle success or show a message to the user here.
      },
      error => {
        console.error('Error creating activity:', error);
        // You can handle errors or show an error message to the user here.
      }
    );
  }
}
