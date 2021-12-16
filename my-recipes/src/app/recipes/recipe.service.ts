import { Injectable } from '@angular/core';
import { RecipeModel } from '../models/recipe.models';
import { DataStorageService } from 'src/app/shared/data-storage.service';

//servizio dedito alla sezione delle ricette 

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes : RecipeModel[]=[];

  selectedRecipe:RecipeModel
  //caricamento delle ricette dal data storage
  constructor(public datastorageService:DataStorageService) { }
  getRecipes()
  {
    this.datastorageService.sendGetRequest('recipes').subscribe(data=>
      {
        console.log(data);
        this.recipes=data as RecipeModel[];
        this.selectedRecipe=this.recipes[0]
      },
      error => {
        console.log(error);
      })
  }
}
