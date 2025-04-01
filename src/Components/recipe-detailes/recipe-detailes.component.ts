import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.int';

@Component({
  selector: 'app-recipe-detailes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detailes.component.html',
  styleUrl: './recipe-detailes.component.scss'
})
export class RecipeDetailesComponent {

  @Input() recipe:Recipe = {} as Recipe
  @Input() isShowed:boolean =true
  @Output() closeModel = new EventEmitter<Boolean>()

  hideModel():void{
    this.isShowed = false
    this.closeModel.emit(false)
  }

}
