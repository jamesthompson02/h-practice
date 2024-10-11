import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballRecordsPageComponent } from './football-records-page.component';

describe('FootballRecordsPageComponent', () => {
  let component: FootballRecordsPageComponent;
  let fixture: ComponentFixture<FootballRecordsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballRecordsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballRecordsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
