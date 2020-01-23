import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: ' - Homepage',
      description: 'Searching for an Angular Frontend Developer | Instructor, you are at the right place',
      author: 'Obeke Calistus',
      keywords: 'ALC, Angular, PLuralsight, Specialist, Google, Andela, Web, Mobile, Responsive, flexbox'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
