import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// either you mention here root or you mention this service in providers array of app module.

export class DataService {
  constructor() {}

  count = 0;
}