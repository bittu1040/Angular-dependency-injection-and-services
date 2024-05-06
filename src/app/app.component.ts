import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

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

  myObservable= new Observable((observer)=>{
    console.log("observer started");
    observer.next("a");
    observer.next("b");
    observer.next("c");
  });

  promise1= new Promise((resolve)=>{
    console.log("promise1 started")
    resolve("promise1 resolved")
  })

  ngOnInit(): void {
    this.myObservable.subscribe((value)=>{
      console.log(value);
    })

    this.promise1.then((value)=>{
      console.log(value)  
    })
  }


}
