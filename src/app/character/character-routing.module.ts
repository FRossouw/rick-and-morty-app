import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterListComponent} from './components/character-list/character-list.component';
import {CharacterDetailsComponent} from './components/character-details/character-details.component';
import {NotFoundComponent} from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CharacterListComponent
      },
      {
        path: ':id',
        component: CharacterDetailsComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
