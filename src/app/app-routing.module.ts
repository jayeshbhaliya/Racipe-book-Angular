import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path:'', redirectTo : '/racipes', pathMatch: 'full' },
  { path: 'racipes', loadChildren:()=>import('./racipes/racipes.module').then(module=>module.RacipesModule)},
  { path: 'shopping-list', loadChildren:()=>import('./shoping-list/shoping-list.module').then(module=>module.ShopingListModule)},
  { path:'auth', component: AuthComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
