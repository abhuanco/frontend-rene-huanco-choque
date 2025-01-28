import {Component} from '@angular/core';
import {Game} from '../../../../core/models/game.model';
import {GameService} from '../../../../core/services/game.service';

@Component({
  standalone: false,
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
})
export class GameListComponent {
  games: Game[] = [];

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(name?: string, genre?: string, platform?: string): void {
    this.gameService.getGamesByFilter(name, genre, platform).subscribe(data => {
      this.games = data;
    });
  }

  onFilterChange(filter: any): void {
    this.loadGames(filter.name, filter.genre, filter.platform);
  }
}
