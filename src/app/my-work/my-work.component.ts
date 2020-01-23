import { Component, OnInit } from '@angular/core';
import { MyWorkService } from '../shared/my-work.service';
import { MyWork } from './my-work';

@Component({
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.less']
})

export class MyWorkComponent implements OnInit {
  myWorks: MyWork[] = [];

  constructor(private myWorkService: MyWorkService) {

  }

  ngOnInit() {
    this.showDetails();
  }

  showDetails() {
    this.myWorks = this.myWorkService.getDetails();
  }

}
