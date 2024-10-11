import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { FootballRecord } from '../../models/football-record.model';
import { FootballRecordApiResponse } from '../../models/football-record-api-response.model';

@Injectable({
  providedIn: 'root',
})
export class FootballRecordsService {
  private _pageNumber$: BehaviorSubject<number> = new BehaviorSubject(1);

  private _totalPages$: Subject<number> = new Subject();

  public pageNumber$: Observable<number> = this._pageNumber$.asObservable();

  public footballRecords$: Observable<FootballRecord[]> = this.pageNumber$.pipe(
    switchMap((pageNumber) => this.getFootballRecords(pageNumber))
  );

  public totalPages$ = this._totalPages$.asObservable();

  constructor(private http: HttpClient) {}

  updatePageNumber(pageNumber: number) {
    this._pageNumber$.next(pageNumber);
  }

  updateTotalPages(totalPages: number) {
    this._totalPages$.next(totalPages);
  }

  getFootballRecords(pageNumber: number) {
    return this.http
      .get<FootballRecordApiResponse>(
        `http://localhost:5000/api/football?pageNumber=${pageNumber}`
      )
      .pipe(
        tap((response) => this.updateTotalPages(response.total_pages)),
        map((response) => response.data)
      );
  }
}
