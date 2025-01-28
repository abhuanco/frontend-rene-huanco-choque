import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GamesModule} from './features/games/games.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GamesModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
