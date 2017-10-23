import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './components/application/application.component';
import { KeyComponent } from './components/key/key.component';

const routes : Routes = [
  {
    path: 'applications',
    component: ApplicationComponent,
  },
  {
    path: 'keys',
    component: KeyComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
