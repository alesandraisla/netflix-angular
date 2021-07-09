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
    NavigationTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
