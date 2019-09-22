import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private dataSource = new BehaviorSubject<any>('');
  currentMessage = this.dataSource.asObservable();

  constructor() { }

  setData(data: any) {
    this.dataSource.next(data);
  }
}