import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { allLeaguesResponse } from '../types/interfaces/football-data';

@Injectable({
  providedIn: 'root',
})
export class FootballDataService {
  private URL = environment.URL;
  private TOKEN = environment.API_TOKEN;
  private _apiFootballBaseUrl = 'https://v3.football.api-sports.io';
  private _apiFootballToken = environment.API_FOOTBALL_TOKEN;
  apiFootballHeaders = new HttpHeaders({
    'x-rapidapi-key': this._apiFootballToken,
  });

  constructor(private http: HttpClient) {}

  getFixtures() {
    return this.http.get(`${this.URL}/leagues`, {
      params: { api_token: this.TOKEN },
    });
  }

  getAllLeagues() {
    return this.http.get<any>(`${this._apiFootballBaseUrl}/leagues`, {
      headers: this.apiFootballHeaders,
      params: {id: 2}
    })
  }

  getPlayer(id: number, season: number) {
    return this.http.get<any>(`${this._apiFootballBaseUrl}/players`, {
      headers: this.apiFootballHeaders,
      params: {
        id,
        season,
      },
    });
  }
}
