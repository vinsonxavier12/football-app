import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoresComponent } from './components/scores/scores.component';
import { HttpClientModule } from '@angular/common/http';
import { LeaguesComponent } from './components/leagues/leagues.component';

@NgModule({
  declarations: [AppComponent, ScoresComponent, LeaguesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
