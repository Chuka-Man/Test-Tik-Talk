import {Routes} from '@angular/router';
import LoginPage from './pages/login-page/login-page';
import {SearchPage} from './pages/search-page/search-page';
import {ProfilePage} from './pages/profile-page/profile-page';
import {Layuot} from './common-ui/layuot/layuot';
import {canActivateAuth} from './auth/access.guard';
import {SettingsPage} from './pages/settings-page/settings-page';

export const routes: Routes = [
  {
    path: '', component: Layuot, children: [
      {path: '', redirectTo:'profile/me', pathMatch: 'full'},
      {path: 'profile/:id', component: ProfilePage},
      {path: 'settings', component: SettingsPage},
      {path: 'search', component: SearchPage},

    ],
    canActivate: [canActivateAuth]

  },
  {path: 'login', component: LoginPage}

];
