import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/template/header/menu/menu.component';
import { MenuActionComponent } from './components/template/header/menu-action/menu-action.component';
import { SeriesComponent } from './components/series/series.component';
import { FilmComponent } from './components/film/film.component';
import { LatestComponent } from './components/latest/latest.component';
import { NavigationTabComponent } from './components/navigation-tab/navigation-tab.component';
import { ManageComponent } from './components/profiles/manage/manage.component';
import { ProfileLayoutComponent } from './template/profile-layout/profile-layout.component';
import { HomeLayoutComponent } from './template/home-layout/home-layout.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    MenuActionComponent,
    SeriesComponent,
    FilmComponent,
    LatestComponent,
    NavigationTabComponent,
    ManageComponent,
    ProfileLayoutComponent,
    HomeLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    [IvyCarouselModule], 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
