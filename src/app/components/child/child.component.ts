import { Component } from '@angular/core';
import { ChildLoggerService } from 'src/app/child-logger.service';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // providers: [
  //   {provide: LoggerService, useClass: ChildLoggerService}
  // ]
})
export class ChildComponent {

  constructor(private logger: LoggerService) {

  }

  log(){
    this.logger.log("button is clicked")
  }
}
