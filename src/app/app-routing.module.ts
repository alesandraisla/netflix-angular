import { LatestComponent } from './components/latest/latest.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesComponent } from './components/series/series.component';
import { FilmComponent } from './components/film/film.component';
import { NavigationTabComponent } from './components/navigation-tab/navigation-tab.component';
import { ManageComponent } from './components/profiles/manage/manage.component';

const routes: Routes = [
  {path: "browse", component: HomeComponent}, 
  {path: "series", component: SeriesComponent},
  {path: "films", component: FilmComponent},
  {path: "latest", component: LatestComponent},
  {path: "myList", component: NavigationTabComponent},
  {path: "profile/manage", component: ManageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
