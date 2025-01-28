import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Game} from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/games`);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/game?id=${id}`);
  }

  getGamesByFilter(name?: string, genre?: string, platform?: string): Observable<Game[]> {
    let params = new HttpParams();
    if (platform) {
      params = params.set('platform', platform);
    }

    return this.http.get<Game[]>(`${this.apiUrl}/games`, {params}).pipe(
      map((games: Game[]) => {
        let filteredGames = games;

        if (name) {
          filteredGames = filteredGames.filter(game =>
            game.title.toLowerCase().includes(name.toLowerCase())
          );
        }

        if (genre) {
          filteredGames = filteredGames.filter(game =>
            game.genre.toLowerCase() === genre.toLowerCase()
          );
        }

        return filteredGames;
      })
    );
  }
}
