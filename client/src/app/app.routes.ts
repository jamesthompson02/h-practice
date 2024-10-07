import { Routes } from '@angular/router';
import { TemperatureConverterPageComponent } from './pages/temperature-converter-page/temperature-converter-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { WeatherDetailsPageComponent } from './pages/weather-details-page/weather-details-page.component';

export const routes: Routes = [
  { path: 'temperature', component: TemperatureConverterPageComponent },
  { path: 'weather', component: WeatherDetailsPageComponent },
  { path: '', redirectTo: 'temperature', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];
