import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RacipeDetailComponent } from "./racipe-detail/racipe-detail.component";
import { RacipeEditComponent } from "./racipe-edit/racipe-edit.component";
import { RacipeResolverService } from "./racipe-resolver.service";
import { RacipeStartComponent } from "./racipe-start/racipe-start.component";
import { RacipesComponent } from "./racipes.component";

const routes: Routes = [
  { path:'', component: RacipesComponent ,
  canActivate :[AuthGuard],
  children : [
    { path : '' , component: RacipeStartComponent },
    { path : 'new' , component: RacipeEditComponent },
    { path : ':id' , component: RacipeDetailComponent , resolve: [RacipeResolverService]},
    { path : ':id/edit' , component: RacipeEditComponent , resolve: [RacipeResolverService]},
  ]},
  { path:'**', redirectTo : '/racipes', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RacipesRoutingModule {

}
