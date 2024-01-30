import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-dependency-injection-and-services';

  constructor(private dataService: DataService){

  }

  refreshValue(){
    this.dataService.count=0
  }
}
