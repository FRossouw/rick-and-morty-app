import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterDetailsComponent} from './character-details/character-details.component';

const routes: Routes = [
  {
    path: 'characters',
    component: CharacterListComponent,
    children: [
      {
        path: ':/id',
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
    component: CharacterListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
