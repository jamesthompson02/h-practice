import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherSearchService } from '../../services/weatherSearch/weather-search.service';
import { debounceTime, map, Subscription, tap } from 'rxjs';
import { WeatherData } from '../../models/weather-data.model';
import dummyWeatherData from '../../dummy-data/weather-data.json';
import { WeatherDetailsComponent } from '../../components/weather-details/weather-details.component';

@Component({
  selector: 'app-weather-details-page',
  standalone: true,
  imports: [WeatherDetailsComponent],
  templateUrl: './weather-details-page.component.html',
  styleUrl: './weather-details-page.component.scss',
})
export class WeatherDetailsPageComponent implements OnInit, OnDestroy {
  searchTerm!: string;
  sub!: Subscription;
  weatherData: WeatherData[] = dummyWeatherData;
  searchedCity: WeatherData | 'Not Found' | undefined = undefined;

  constructor(private weatherSearchService: WeatherSearchService) {}

  ngOnInit(): void {
    this.sub = this.weatherSearchService.searchTerm$
      .pipe(
        debounceTime(300),
        map((searchQuery: string) => searchQuery.toLowerCase().trim()),
        tap((searchQuery) => {
          if (!searchQuery) {
            this.searchedCity = undefined;
            return;
          }
          const city = this.weatherData.find(
            (city) => city.name.toLowerCase() === searchQuery
          );
          city ? (this.searchedCity = city) : (this.searchedCity = 'Not Found');
        })
      )
      .subscribe((val) => {
        this.searchTerm = val;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onInput(event: Event) {
    const newSearchTerm: string = (event.target as HTMLInputElement).value;
    this.weatherSearchService.updateSearchTerm(newSearchTerm);
  }
}
