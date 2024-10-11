import { Routes } from '@angular/router';
import { TemperatureConverterPageComponent } from './pages/temperature-converter-page/temperature-converter-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { WeatherDetailsPageComponent } from './pages/weather-details-page/weather-details-page.component';
import { FootballRecordsPageComponent } from './pages/football-records-page/football-records-page.component';

export const routes: Routes = [
  { path: 'temperature', component: TemperatureConverterPageComponent },
  { path: 'weather', component: WeatherDetailsPageComponent },
  { path: 'football', component: FootballRecordsPageComponent },
  { path: '', redirectTo: 'temperature', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];
