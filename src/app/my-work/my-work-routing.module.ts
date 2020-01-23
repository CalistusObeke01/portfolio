import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyWorkComponent } from './my-work.component';

const routes: Routes = [
  {
    path: '',
    component: MyWorkComponent,
    data: {
      title: ' - My work',
      description: 'projects',
      author: 'Obeke Calistus',
      keywords: 'projects, portfolio, angular, CSS, HTML5, react, CLI, GIT'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyWorkRoutingModule { }
