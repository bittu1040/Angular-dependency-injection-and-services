import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  // dataService = new DataService();

  number = 0;

  increase() {
    this.dataService.count= this.dataService.count+10;
  }

  decrease() {
    this.dataService.count-=10;
  }

  getCurrentValue(){
    this.number= this.dataService.count;
  }
}
