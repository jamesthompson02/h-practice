import { Component, Input } from '@angular/core';
import { WeatherData } from '../../models/weather-data.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss',
})
export class WeatherDetailsComponent {
  @Input() city!: WeatherData | 'Not Found';
}
