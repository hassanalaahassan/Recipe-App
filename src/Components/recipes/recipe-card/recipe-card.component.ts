import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe.int';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe:Recipe = {} as Recipe
  @Output() showedRecipe = new EventEmitter<number>()
  ngOnInit(): void {
      console.log(this.recipe);
  }

  sendRecipe():void{
    this.showedRecipe.emit(this.recipe.id)
  }
}
