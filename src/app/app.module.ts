import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomePageComponentComponent } from './components/home-page-component/home-page-component.component';
import { LeagueTablePageComponent } from './components/league-table-page/league-table-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeagueTableComponentComponent } from './components/league-table-page/league-table-component/league-table-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamPageComponent } from './components/team-page/team-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    LeagueTablePageComponent,
    NavbarComponent,
    LeagueTableComponentComponent,
    TeamPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
