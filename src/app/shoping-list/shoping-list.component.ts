import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit ,OnDestroy {
  ingredient : Ingredient[] ;
  igChangeSub : Subscription;
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(){
    this.ingredient = this.shoppingListService.getIngrident();
    this.igChangeSub = this.shoppingListService.ingredientChange.subscribe(
      (ingredient : Ingredient[]) => {
        this.ingredient = ingredient
      }
    )
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  onEditItem(index : number){
    this.shoppingListService.startedEditing.next(index)
  }

}

