import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import {CharacterListComponent} from './components/character-list/character-list.component';
import {CharacterCardComponent} from './components/character-card/character-card.component';
import {CharacterDetailsComponent} from './components/character-details/character-details.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterCardComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
