import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  showLoader = new Subject<boolean>();
  constructor() { }

  showLoaderSpinner(): void {
    this.showLoader.next(true);
  }
  hideLoaderSpinner(): void {
    this.showLoader.next(false);
  }
}
