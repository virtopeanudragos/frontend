import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';
import { AnalyticsService} from "../analytics.service";

@Component({
  selector: 'app-select-activity',
  templateUrl: './select-activity.component.html',
  styleUrls: ['./select-activity.component.css']
})
export class SelectActivityComponent implements OnInit {
  selectedActivity: string = '';
  names: string[] = [];


  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.activitiesService.getCurrentActivity().subscribe((activity) => {
      this.selectedActivity = activity || '';
    });

    this.fetchActivities();
    this.activitiesService.setCurrentActivity(this.selectedActivity);
  }

  fetchActivities(): void {
    this.activitiesService.getActivities().subscribe((activities) => {
      this.names = activities.map((activity) => activity.name);
    });
  }

  onActivitySelectionChange(): void {
    this.activitiesService.setCurrentActivity(this.selectedActivity);
  }


}
