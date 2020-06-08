import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    canActivate:[LoginGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule),
    
  }
  

];
//, { preloadingStrategy: PreloadAllModules }
@NgModule({
  imports: [RouterModule,RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
