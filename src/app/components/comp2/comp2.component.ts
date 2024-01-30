import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  // dataService = new DataService();

  number = 0;

  increase() {
    this.dataService.count = this.dataService.count + 10;
  }

  decrease() {
    this.dataService.count -= 10;
  }

  getCurrentValue() {
    this.number = this.dataService.count;
  }
}
