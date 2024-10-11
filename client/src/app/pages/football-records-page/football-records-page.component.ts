import { Component, OnDestroy, OnInit } from '@angular/core';
import { FootballRecordsService } from '../../services/footballRecords/football-records.service';
import { Observable, Subscription } from 'rxjs';
import { FootballRecord } from '../../models/football-record.model';
import { CommonModule } from '@angular/common';
import { PaginationButtonComponent } from '../../components/pagination-button/pagination-button.component';

@Component({
  selector: 'app-football-records-page',
  standalone: true,
  imports: [CommonModule, PaginationButtonComponent],
  templateUrl: './football-records-page.component.html',
  styleUrl: './football-records-page.component.scss',
})
export class FootballRecordsPageComponent implements OnInit, OnDestroy {
  pageNumber$!: Observable<number>;
  footballRecords$!: Observable<FootballRecord[]>;
  totalPages$!: Observable<number>;

  sub!: Subscription;

  paginationArray: number[] = [];

  constructor(private footballRecordsService: FootballRecordsService) {}

  ngOnInit(): void {
    this.sub = this.footballRecordsService.totalPages$.subscribe((val) => {
      this.paginationArray = [];
      for (let i = 1; i <= val; i++) {
        this.paginationArray.push(i);
      }
    });
    this.pageNumber$ = this.footballRecordsService.pageNumber$;
    this.footballRecords$ = this.footballRecordsService.footballRecords$;
    this.totalPages$ = this.footballRecordsService.totalPages$;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  updatePageNumber(pageNumber: number) {
    this.footballRecordsService.updatePageNumber(pageNumber);
  }
}
