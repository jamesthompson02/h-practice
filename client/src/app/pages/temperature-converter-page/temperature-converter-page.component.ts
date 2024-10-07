import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature-converter-page.component.html',
  styleUrl: './temperature-converter-page.component.scss',
})
export class TemperatureConverterPageComponent {
  celsius: number | null = null;
  farenheit: number | null = null;

  onCelsiusChange(event: number | null) {
    if (event === null) {
      this.farenheit = null;
      return;
    }
    const convertedToFarenheit = this.fromCelsiusToFarenheit(event);
    this.farenheit = this.roundNumberToOneDecimal(convertedToFarenheit);
  }

  onFarenheitChange(event: number | null) {
    if (event === null) {
      this.celsius = null;
      return;
    }
    const convertedToCelsius = this.fromFarenheitToCelsius(event);
    this.celsius = this.roundNumberToOneDecimal(convertedToCelsius);
  }

  fromCelsiusToFarenheit(num: number): number {
    return 1.8 * num + 32;
  }

  fromFarenheitToCelsius(num: number): number {
    return (num - 32) * (5 / 9);
  }

  roundNumberToOneDecimal(num: number) {
    return Math.round(num * 10) / 10;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
