import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AnalyticsService} from "../analytics.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-student-analytics-row',
  templateUrl: './student-analytics-row.component.html',
  styleUrls: ['./student-analytics-row.component.css']
})

export class StudentAnalyticsRowComponent implements OnInit{
  @Input() grade: any;

  ngOnInit(): void {
  }


}
