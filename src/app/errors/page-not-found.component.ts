import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h2>
      error 404
    </h2>
  `,
  styles: [`
    h2 {
      text-align: center;
      font-size: 5em;
      margin-top: 150px;
      text-transform: uppercase;
      color: #8aa2ae;
    }
  `]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
