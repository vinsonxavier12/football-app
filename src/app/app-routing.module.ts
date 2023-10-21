import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoresComponent } from './components/scores/scores.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { UclComponent } from './components/ucl/ucl.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { PlayersComponent } from './components/players/players.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'leagues', component: LeaguesComponent },
      { path: 'scores', component: ScoresComponent },
      { path: 'ucl', component: UclComponent },
      { path: 'home', component: HomeComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'news', component: NewsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
