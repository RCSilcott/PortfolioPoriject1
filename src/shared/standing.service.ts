import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { StandingResponse } from 'src/app/models/league';
import { TeamInformation } from 'src/app/models/team-information';
import { Team } from 'src/app/models/team/team';

@Injectable({
  providedIn: 'root'
})
export class StandingService {

private baseUrl: string = "https://api-football-v1.p.rapidapi.com/v3/"

constructor(private http: HttpClient) { }

setHeadings(){
 return new HttpHeaders()
    .set('X-RapidAPI-host', 'api-football-v1.p.rapidapi.com')
    .set('X-RapidAPI-Key', '82c6aef0bamsh21cef4a197b2c64p1b9df9jsn10e9a44d119e');
}

getStandings(): Observable<StandingResponse> {
    let header = this.setHeadings();

    return this.http.get<StandingResponse>(this.baseUrl + 'standings?season=2020&league=39', {headers: header}).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
    );
}

getTeamInformation(teamId: number = 33): Observable<TeamInformation> {
 let header = this.setHeadings();

 return this.http.get<TeamInformation>(this.baseUrl + `teams?id=${teamId}`, {headers: header}).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
    );
}

getTeamStatistics(seasonId: number = 2019 , teamId: number = 33, leagueId: number = 39): Observable<Team> {
 let header = this.setHeadings();

 return this.http.get<Team>(this.baseUrl + `statistics?season=${seasonId}&team=${teamId}&league=${leagueId}`, {headers: header}).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
    );
}

}
