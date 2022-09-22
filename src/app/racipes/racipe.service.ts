import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoping-list/shopping-list.service";
import { Racipe } from "./Racipe";

@Injectable()
export class RacipeService {
  racipesChanged = new Subject<Racipe[]>();

  // private racipe:Racipe[] = [
  //   new Racipe('racipe1','this is racipe 1', 'https://spiderimg.amarujala.com/cdn-cgi/image/width=674,height=379,fit=cover,f=auto/assets/images/2021/09/12/750x506/kofta_1631442328.jpeg',[ new Ingredient('abc' , 4), new Ingredient('fgh' , 6)]),
  //   new Racipe('racipe2','this is racipe 2', 'https://spiderimg.amarujala.com/cdn-cgi/image/width=674,height=379,fit=cover,f=auto/assets/images/2021/09/25/750x506/spring-rolls_1632537373.jpeg',[ new Ingredient('xyz' , 3)])
  // ];
  private racipe: Racipe[] = [];

  constructor(private slService: ShoppingListService) { }
  setRacipes(racipes: Racipe[]) {
    this.racipe = racipes;
    this.racipesChanged.next(this.racipe.slice());
  }

  getRacipes() {
    return this.racipe.slice();
  }
  getRacipe(index: number) {
    return this.racipe[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRacipe(racipe: Racipe) {
    this.racipe.push(racipe);
    this.racipesChanged.next(this.racipe.slice());
  }
  updateRacipe(index: number, newRacipe: Racipe) {
    this.racipe[index] = newRacipe;
    this.racipesChanged.next(this.racipe.slice());
  }
  deleteRacipe(index: number) {
    this.racipe.splice(index, 1);
    this.racipesChanged.next(this.racipe.slice());
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
