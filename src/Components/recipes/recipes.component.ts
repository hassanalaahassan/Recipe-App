import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeCardComponent } from "./recipe-card/recipe-card.component";
import { Recipe } from '../../interfaces/recipe.int';
import { RecipeDetailesComponent } from "../recipe-detailes/recipe-detailes.component";
import { RecipesService } from '../../services/Recipes.service';
import { SearchTypesService } from '../../services/search-types.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeCardComponent, RecipeDetailesComponent,FormsModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];
  recipeDetailes: Recipe = {} as Recipe;
  showModel: boolean = false;
  @ViewChild("searchInput") searchTerm!:ElementRef

  constructor(private recipesService: RecipesService , private SearchService:SearchTypesService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

  filterRecipes(){
    this.recipes = this.SearchService.searchByTitle(this.searchTerm.nativeElement.value)
  }

  receiveRecipeFromChild(recipeId: number): void {
    this.recipeDetailes = this.showedRecipeById(recipeId);
    this.toggleModel();
  }

  showedRecipeById(recipeId: number): Recipe {
    return this.SearchService.searchById(recipeId);
  }

  toggleModel(): void {
    this.showModel = !this.showModel;
  }

}
