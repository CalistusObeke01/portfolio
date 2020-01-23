import { Component } from '@angular/core';
import { SEOService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private seoService: SEOService) {
    this.seoService.updateTitle();
  }
}
