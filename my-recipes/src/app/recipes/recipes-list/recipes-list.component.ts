import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Input() recipe: RecipeModel;


  selectedRecipe: RecipeModel;
  constructor() {
    //this.selectedRecipe=this.recipes[0];
  }

  ngOnInit(): void {
  }

}
