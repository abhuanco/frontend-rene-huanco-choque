import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-game-filter',
  templateUrl: './game-filter.component.html',
})
export class GameFilterComponent {
  @Output() filterChange = new EventEmitter<any>();

  name: string = '';
  genre: string = '';
  platform: string = '';

  onFilterChange(): void {
    this.filterChange.emit({
      name: this.name,
      genre: this.genre,
      platform: this.platform
    });
  }
}
