import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CkeditorService {

  @Output() ckeditorTrigger: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
