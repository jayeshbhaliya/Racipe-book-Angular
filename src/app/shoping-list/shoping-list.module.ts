import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShopingListComponent } from "./shoping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";

@NgModule({
  declarations : [
    ShopingListComponent,
    ShoppingEditComponent,
  ],
  imports : [
    RouterModule,
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule
  ]
})
export class ShopingListModule {
}
