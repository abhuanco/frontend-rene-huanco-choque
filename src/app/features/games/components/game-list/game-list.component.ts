import {Component} from '@angular/core';
import {ApiService} from '../../../../core/services/api.service';
import {Game} from '../../../../core/models/game.model';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  standalone: false,
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
})
export class GameListComponent {
  games: Game[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getGames().subscribe((data: Game[]) => {
      this.games = data;
    });
  }
}
