import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponentComponent } from './components/home-page-component/home-page-component.component';
import { LeagueTablePageComponent } from './components/league-table-page/league-table-page.component';

const routes: Routes = [
   { path: '', component: HomePageComponentComponent },
   { path: 'LeagueTable', component: LeagueTablePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
