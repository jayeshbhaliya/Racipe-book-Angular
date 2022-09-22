import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RacipesRoutingModule } from "./racipes-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RacipeDetailComponent } from "./racipe-detail/racipe-detail.component";
import { RacipeEditComponent } from "./racipe-edit/racipe-edit.component";
import { RacipeStartComponent } from "./racipe-start/racipe-start.component";
import { RacipeItemComponent } from "./racipes-list/racipe-item/racipe-item.component";
import { RacipesListComponent } from "./racipes-list/racipes-list.component";
import { RacipesComponent } from "./racipes.component";

@NgModule({
  declarations : [
    RacipesComponent,
    RacipesListComponent,
    RacipeDetailComponent,
    RacipeItemComponent,
    RacipeStartComponent,
    RacipeEditComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    RacipesRoutingModule,
  ],
})
export class RacipesModule {


}
