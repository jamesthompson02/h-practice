import { FootballRecord } from './football-record.model';

export interface FootballRecordApiResponse {
  total_pages: number;
  data: FootballRecord[];
}
