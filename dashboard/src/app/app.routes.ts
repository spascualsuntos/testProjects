import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './components/application/application.component';
import { KeyComponent } from './components/key/key.component';

const routes : Routes = [
  {
    path: '',
    component: ApplicationComponent,
  },
  {
    path: 'keys',
    component: KeyComponent,
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
