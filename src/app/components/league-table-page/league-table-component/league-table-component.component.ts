import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StandingResponse } from 'src/app/models/league';
import { StandingService } from 'src/shared/standing.service';

@Component({
  selector: 'app-league-table-component',
  templateUrl: './league-table-component.component.html',
  styleUrls: ['./league-table-component.component.scss']
})
export class LeagueTableComponentComponent implements OnInit, OnDestroy {

  sub: Subscription | undefined;
  myResponse!: StandingResponse;

  constructor(private http: HttpClient, private standingService: StandingService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }


  ngOnInit(): void {

   this.sub =  this.standingService.getStandings().subscribe({
      next: standings => this.myResponse = standings
    });

    console.log(this.myResponse);
  }

}
