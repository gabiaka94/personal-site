import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ContactComponent} from './components/contact/contact.component';
import {ResumeeComponent} from './components/resumee/resumee.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'skills', component: SkillsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'resumee', component: ResumeeComponent
  },

  { path: '**', redirectTo: '', pathMatch: 'full'}
];
