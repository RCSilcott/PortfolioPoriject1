import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { StandingResponse } from 'src/app/models/league';

@Injectable({
  providedIn: 'root'
})
export class StandingService {

private baseUrl: string = "https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39"

constructor(private http: HttpClient) { }

getStandings(): Observable<StandingResponse> {
    let header = new HttpHeaders()
    .set('X-RapidAPI-host', 'api-football-v1.p.rapidapi.com')
    .set('X-RapidAPI-Key', '82c6aef0bamsh21cef4a197b2c64p1b9df9jsn10e9a44d119e');

    return this.http.get<StandingResponse>(this.baseUrl, {headers: header}).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
    );
}

}
