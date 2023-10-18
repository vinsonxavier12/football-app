import { Component } from '@angular/core';
import { FootballDataService } from 'src/app/services/football-data.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss'],
})
export class ScoresComponent {
  fixtures: any;

  constructor(private data: FootballDataService) {}

  ngOnInit() {
    this.data.getFixtures().subscribe((res) => {
      this.fixtures = res;
      console.log(res);
    });
  }
}
