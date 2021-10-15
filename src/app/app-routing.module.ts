import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
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
    path: 'onboarding',
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
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },



  {
    path: 'ayudame',
    loadChildren: () => import('./ayudame/ayudame.module').then( m => m.AyudamePageModule) 
  },
    
  {

    path: 'sos',
    loadChildren: () => import('./sos/sos.module').then( m => m.SosPageModule)
  },
  {
    path: 'meditacion',
    loadChildren: () => import('./meditacion/meditacion.module').then( m => m.MeditacionPageModule)
  },
  {
    path: 'candycrush',
    loadChildren: () => import('./juegos/candycrush/candycrush.module').then( m => m.CandycrushPageModule)
  },
  {
    path: 'angrybirds',
    loadChildren: () => import('./juegos/angrybirds/angrybirds.module').then( m => m.AngrybirdsPageModule)
  },
  {
    path: 'plantsvszombies',
    loadChildren: () => import('./juegos/plantsvszombies/plantsvszombies.module').then( m => m.PlantsvszombiesPageModule)
  },
  {
    path: 'sudoku',
    loadChildren: () => import('./juegos/sudoku/sudoku.module').then( m => m.SudokuPageModule)
  },
  {
    path: 'uno',
    loadChildren: () => import('./juegos/uno/uno.module').then( m => m.UnoPageModule)
  },
  {
    path: 'minecraft',
    loadChildren: () => import('./juegos/minecraft/minecraft.module').then( m => m.MinecraftPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
