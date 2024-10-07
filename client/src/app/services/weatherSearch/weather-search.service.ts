import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherSearchService {
  private _searchTerm$: BehaviorSubject<string> = new BehaviorSubject('');

  public searchTerm$: Observable<string> = this._searchTerm$.asObservable();

  updateSearchTerm(searchTerm: string) {
    this._searchTerm$.next(searchTerm);
  }
}
