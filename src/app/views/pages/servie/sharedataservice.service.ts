import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private subject = new Subject<any>();

  constructor() { }
  setData(data: any) {
    this.subject.next({ newdata: data });
  }
  getData(): Observable<any> {
    return this.subject.asObservable();
  }
  clearData() {
    this.subject.next();
  }
}
