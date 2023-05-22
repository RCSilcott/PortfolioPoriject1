import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeamInformation } from 'src/app/models/team-information';
import { Team } from 'src/app/models/team/team';
import { StandingService } from 'src/shared/standing.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  teamInformation!: TeamInformation;
  private sub: Subscription | undefined;

  constructor(private route: ActivatedRoute, private standingService: StandingService) { }

 ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
   this.sub =  this.standingService.getTeamInformation(this.route.snapshot.params['id']).subscribe({
      next: teamInfo => this.teamInformation = teamInfo
    });
  }
}
