import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me.component';

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent,
    data: {
      title: ' - About me',
      description: `Obeke Calistus, is a passionate frontend web developer,
      that enjoys what he does and a team tech ninja 
      `,
      author: 'Obeke Calistus',
      keywords: 'ALC, Angular, PLuralsight, Specialist, Google, Andela, Stutern. Jobs, Tutoring'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
