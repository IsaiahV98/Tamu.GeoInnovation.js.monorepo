import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor() {}

  public getExisting() {
    const mock: Array<DatabaseRecord> = [
      {
        name: 'Edher | customer_addre.csv',
        type: 'csv',
        date: Date.now(),
        size: '215 B',
        status: 'ready'
      },
      {
        name: 'Edher | shipping_centrs.csv',
        type: 'csv',
        date: Date.now(),
        size: '1.35 MB',
        status: 'processing'
      }
    ];

    return of(mock);
  }
}

export interface DatabaseRecord {
  name: string;
  type: 'csv' | 'text' | 'access-2007' | 'access';
  date: number;
  size: string;
  status: 'ready' | 'processing';
}
