import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MyWorkService {

  constructor() { }

  details = [
    {
      id: 1,
      pics: '/assets/images/Screenshot (122).png',
      title: 'Careline Nigeria',
      tools: ['HTML5', 'CSS3', 'Angular', 'Typescript', 'Bootstrap'],
      link: 'http://www.carelinenigeria.com'
    },
    {
      id: 2,
      pics: '/assets/images/Screenshot (123).png',
      title: 'NBA Stat',
      tools: ['HTML5', 'CSS3', 'JS', 'Bootstrap'],
      link: 'https://calistusobeke01.github.io/nba-players-stat/'
    },
    {
      id: 3,
      pics: '/assets/images/Screenshot (115).png',
      title: 'Book!T',
      tools: ['HTML5', 'CSS3', 'React', 'Bootstrap'],
      link: ''
    },
    {
      id: 4,
      pics: '/assets/images/Screenshot (126).png',
      title: 'Dorony Beauty & Skincare',
      tools: ['HTML5', 'CSS3', 'Angular', 'Typescript', 'Bootstrap'],
      link: ''
    },
    {
      id: 5,
      pics: '/assets/images/Screenshot (128).png',
      title: 'Giphy Finder',
      tools: ['HTML5', 'CSS3', 'Angular', 'Typescript', 'Bootstrap'],
      link: ''
    }
  ]


  getDetails() {
    return this.details;
  }

}
