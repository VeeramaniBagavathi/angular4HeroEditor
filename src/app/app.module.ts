import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing.module";

import {HttpModule} from "@angular/http";

import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./data/in-memory-data.service";

import {AppComponent} from "./app.components";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroDetailComponent} from "./components/heroDetail/hero-detail.component";
import {DashboardComponent} from "./components/dashboard/dashboard-component";
import {HeroService} from "./service/hero.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    HeroService
  ]
})

export class AppModule {

}
