import { Routes } from '@angular/router';
import {GameListComponent} from './features/games/components/game-list/game-list.component';
import {GameDetailComponent} from './features/games/components/game-detail/game-detail.component';
export const routes: Routes = [
  { path: '', component: GameListComponent },
  { path: 'games/:id', component: GameDetailComponent },
  {path: "**", redirectTo: ""}
];
