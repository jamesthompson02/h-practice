import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsPageComponent } from './weather-details-page.component';

describe('WeatherDetailsPageComponent', () => {
  let component: WeatherDetailsPageComponent;
  let fixture: ComponentFixture<WeatherDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
