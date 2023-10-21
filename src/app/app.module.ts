import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoresComponent } from './components/scores/scores.component';
import { HttpClientModule } from '@angular/common/http';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { UclComponent } from './components/ucl/ucl.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PlayersComponent } from './components/players/players.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [AppComponent, ScoresComponent, LeaguesComponent, UclComponent, MainComponent, SidebarComponent, HeaderComponent, HomeComponent, PlayersComponent, NewsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
