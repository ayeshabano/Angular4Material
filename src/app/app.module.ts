import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {DialogOverviewExampleDialog, HeroFormComponent} from './hero-form.component';
import {routes} from './app.routes';
import {ItemComponent} from './item.component';
import {BookmarkComponent} from "./bookmark.component";


@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ItemComponent,
    DialogOverviewExampleDialog,
    BookmarkComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    routes
  ],

  entryComponents: [
    DialogOverviewExampleDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
