import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.models';
import { RecipeService } from '../recipe.service';
//import { RecipesService } from 'src/app/recipes/recipes.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipesComponent } from '../recipes.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  [x: string]: any;
  @Output() recipeSelectedInList = new EventEmitter<DataStorageService>()

  constructor(private recipeservice:RecipeService) {
   }

  ngOnInit(): void {
    this.recipeservice.getRecipes();
  }

  onRecipeSelected(recipe:DataStorageService){
    this.recipeSelectedInList.emit(recipe);
  }

}
