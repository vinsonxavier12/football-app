import { Component } from '@angular/core';
import { FootballDataService } from 'src/app/services/football-data.service';
import { League } from 'src/app/types/interfaces/football-data';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent {
  allLeagues: League[] = [];

  constructor(private data: FootballDataService) {}

  ngOnInit(): void {
    this.getAllLeagues();
  }

  getAllLeagues() {
    this.data.getAllLeagues().subscribe((res) => {
      console.log(res)
      // this.allLeagues = res.data;
    });
  }

  getPlayer() {
    this.data.getPlayer(276, 2019).subscribe((res => {
      console.log(res)
    }))
  }
}
