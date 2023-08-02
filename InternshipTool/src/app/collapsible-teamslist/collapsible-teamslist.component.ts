import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapsible-teamslist',
  templateUrl: './collapsible-teamslist.component.html',
  styleUrls: ['./collapsible-teamslist.component.css']
})
export class CollapsibleTeamslistComponent implements OnInit{
  @Input() team: any;
  // @ts-ignore
  teamName: string = 'Team name';
  isAnalyticsTableVisible: boolean = false;

  toggleAnalyticsTable(): void {
    this.isAnalyticsTableVisible = !this.isAnalyticsTableVisible;
  }

  ngOnInit(): void {
    this.teamName = 'Team: ' + this.team.teamId;
  }
}
