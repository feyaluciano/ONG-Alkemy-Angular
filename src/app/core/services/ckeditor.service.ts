import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CkeditorService {

  @Output() ckeditorTrigger: EventEmitter<any> = new EventEmitter();

  public textEditor$!: BehaviorSubject<string>;

  public getHandlerTextEditor$(): Observable<string> {
    return this.textEditor$.asObservable();
  }

  constructor() {
    this.textEditor$ = new BehaviorSubject("");
   }
}
