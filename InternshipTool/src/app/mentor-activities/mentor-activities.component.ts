import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-mentor-activities',
  templateUrl: './mentor-activities.component.html',
  styleUrls: ['./mentor-activities.component.css']
})
export class MentorActivitiesComponent implements OnInit {
  activities: any[] = [];

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    this.activitiesService.getActivities().subscribe(activities => {
      this.activities = activities;
    });
  }

  deleteActivity(activity: any): void {
    this.activitiesService.deleteActivity(activity.id).subscribe(() => {
      this.getActivities();
    });
  }
}
