import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private _debounceTimer?: NodeJS.Timeout;

  constructor(private placesService: PlacesService) { }

  onQueryChange(query: string) {

    if (this._debounceTimer) clearTimeout(this._debounceTimer);

    this._debounceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery(query);
    }, 350);

  }

}
