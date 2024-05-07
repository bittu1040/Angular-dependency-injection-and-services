import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Student {
  name: string;
  age: number;
}
@Injectable({
  providedIn: 'root'
})
// either you mention here root or you mention this service in providers array of app module.

export class DataService {
  private _url: string="assets/data.json";
  constructor(private http: HttpClient) {}

  count = 0;

  getStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this._url);
  }
}
