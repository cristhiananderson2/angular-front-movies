import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { GeneralListComponent } from './shared/components/general-list/general-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListMoviesComponent,
    GeneralListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
