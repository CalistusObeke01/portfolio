import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
     // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
     // tslint:disable-next-line: only-arrow-functions
      $('.menu-toggle').click(function() {
        $('.menu-toggle').toggleClass('active');
        $('nav').toggleClass('active');
      });
    });
  }

}
