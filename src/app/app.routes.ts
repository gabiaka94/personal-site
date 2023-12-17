import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ContactComponent} from './components/contact/contact.component';
import {ResumeeComponent} from './components/resumee/resumee.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Gabriele Miano | Homepage' }
  },

  {
    path: 'about', component: AboutComponent,  data: { title: 'Gabriele Miano | About' }
  },
  {
    path: 'skills', component: SkillsComponent,  data: { title: 'Gabriele Miano | Skills' }
  },
  {
    path: 'contacts', component: ContactComponent,  data: { title: 'Gabriele Miano | Contacts' }
  },
  {
    path: 'resumee', component: ResumeeComponent,  data: { title: 'Gabriele Miano | Resumee' }
  },

  { path: '**', redirectTo: '', pathMatch: 'full'}
];
