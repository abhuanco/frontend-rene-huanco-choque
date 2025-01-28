import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import {GameListComponent} from './components/game-list/game-list.component';
import {GameDetailComponent} from './components/game-detail/game-detail.component';
import {GameFilterComponent} from './components/game-filter/game-filter.component';


@NgModule({
  declarations: [
    GameListComponent,
    GameDetailComponent,
    GameFilterComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
  ]
})
export class GamesModule { }
