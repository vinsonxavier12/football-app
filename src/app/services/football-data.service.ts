import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { allLeaguesResponse } from '../types/interfaces/football-data';

@Injectable({
  providedIn: 'root',
})
export class FootballDataService {
  private URL = environment.URL;
  private TOKEN = environment.API_TOKEN;

  constructor(private http: HttpClient) {}

  getFixtures() {
    return this.http.get(`${this.URL}/leagues`, {
      params: { api_token: this.TOKEN },
    });
  }

  getAllLeagues() {
    return this.http.get<allLeaguesResponse>(`${this.URL}/leagues`, {
      params: { api_token: this.TOKEN },
    });
  }
}
