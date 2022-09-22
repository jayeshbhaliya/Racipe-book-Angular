import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredientChange = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredient : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Mango', 10)
  ]

  getIngrident(){
    return this.ingredient.slice();
  }
  getIngredient(index : number){
    return this.ingredient[index];
  }
  addIngredient(ingredient : Ingredient){
    this.ingredient.push(ingredient);
    this.ingredientChange.next(this.ingredient.slice());
  }
  addIngredients(ingredient : Ingredient[]){
    this.ingredient.push(...ingredient);
    this.ingredientChange.next(this.ingredient.slice());
  }
  updateIngredient (index : number, newIngredient : Ingredient){
    this.ingredient[index] = newIngredient;
    this.ingredientChange.next(this.ingredient.slice())
  }
  deleteIngredient(index : number){
    this.ingredient.splice(index,1);
    this.ingredientChange.next(this.ingredient.slice())
  }
}
