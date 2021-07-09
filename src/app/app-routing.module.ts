import { LatestComponent } from './components/latest/latest.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesComponent } from './components/series/series.component';
import { FilmComponent } from './components/film/film.component';
import { NavigationTabComponent } from './components/navigation-tab/navigation-tab.component';

const routes: Routes = [
  {path: "home", component: HomeComponent}, 
  {path: "series", component: SeriesComponent},
  {path: "filmes", component: FilmComponent},
  {path: "bombando", component: LatestComponent},
  {path: "navegando", component: NavigationTabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
