import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game} from '../../../../core/models/game.model';
import {GameService} from '../../../../core/services/game.service';

@Component({
  standalone: false,
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game = {
    id: 0,
    title: '',
    thumbnail: '',
    short_description: '',
    game_url: '',
    genre: '',
    platform: '',
    publisher: '',
    developer: '',
    release_date: '',
    freetogame_profile_url: ''
  };

  constructor(private route: ActivatedRoute, private gameService: GameService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gameService.getGameById(+id).subscribe(data => {
        this.game = data;
      });
    }
  }
}
