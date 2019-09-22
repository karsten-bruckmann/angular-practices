import { Component, OnInit } from '@angular/core';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.less']
})
export class SharedComponentComponent implements OnInit {

  constructor(private myService: MyService) { }

  ngOnInit() {
   console.log(this.myService); 
  }

}
