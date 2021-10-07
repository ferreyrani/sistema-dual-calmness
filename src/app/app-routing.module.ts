import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./intro/intro.module').then((m) => m.IntroPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'intro-config',
    loadChildren: () =>
      import('./intro-config/intro-config.module').then(
        (m) => m.IntroConfigPageModule
      ),
  },
  {
    path: 'intro-config-message',
    loadChildren: () =>
      import('./intro-config-message/intro-config-message.module').then(
        (m) => m.IntroConfigMessagePageModule
      ),
  },
  {
    path: 'intro-config-contacts',
    loadChildren: () =>
      import('./intro-config-contacts/intro-config-contacts.module').then(
        (m) => m.IntroConfigContactsPageModule
      ),
  },
  {
    path: 'on-boarding',
    loadChildren: () =>
      import('./on-boarding/on-boarding.module').then(
        (m) => m.OnBoardingPageModule
      ),
  },
  {
    path: 'respiracion',
    loadChildren: () =>
      import('./respiracion/respiracion.module').then(
        (m) => m.RespiracionPageModule
      ),
  },
  {
    path: 'distraeme',
    loadChildren: () =>
      import('./distraeme/distraeme.module').then((m) => m.DistraemePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
