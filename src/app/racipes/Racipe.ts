import { Ingredient } from "../shared/ingredient.model";

export class Racipe {
  name: string;
  description: string;
  imagePath: string;
  ingredient : Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ing :Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredient = ing;
  }
}
