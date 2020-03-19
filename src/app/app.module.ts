import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
