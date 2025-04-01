import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.int';
import { RECIPES } from '../server/Recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes:Recipe[] = RECIPES

  constructor() { }

  getRecipes():Recipe[]{
    return this.recipes
  }


}
