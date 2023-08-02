import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  @Input() activity: any;
  @Output() deleteActivityEvent = new EventEmitter<any>();
  isActivityCollapsibleVisible: boolean = false;

  toggleAnalyticsTable(): void {
    this.isActivityCollapsibleVisible = !this.isActivityCollapsibleVisible;
  }

  deleteActivity(): void {
    this.deleteActivityEvent.emit(this.activity);
  }
}
