import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoresComponent } from './components/scores/scores.component';

const routes: Routes = [
  { path: 'scores', component: ScoresComponent },
  { path: '', redirectTo: 'scores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
