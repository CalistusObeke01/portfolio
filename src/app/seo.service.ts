import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  updateMetaInfo(description, author, keywords) {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'author', content: author });
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

  updateTitle(title?: string) {
    if (!title) {
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map((route) => {
            while (route.firstChild) { route = route.firstChild; }
            return route;
          }),
          filter((route) => route.outlet === 'primary'),
          mergeMap((route) => route.data)).subscribe((event) => {
            this.updateMetaInfo(event.description, event.author, event.keywords);
            this.titleService.setTitle(`devChuks ${event.title}`);
          });
    } else {
      this.titleService.setTitle(`devChuks ${title}`);
    }
  }
}

