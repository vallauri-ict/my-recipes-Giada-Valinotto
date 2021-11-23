import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes :RecipeModel[]=[
    new RecipeModel(
      "Spaghetti alla chitarra",
      "Un particolare tipo di pasta che...",
      "https://images.lacucinaitaliana.it/wp-content/uploads/2018/08/01223240/Spaghetti-alla-chitarra-con-pallottine-1600x800.jpg"
    ),
    new RecipeModel(
      "Lasagne alla bolognese",
      "Che buone le lasagne",
      "https://www.tribugolosa.com/uploads/media/lasagne-alla-bolognese-hem1.jpg?1389133420"
    ),
    new RecipeModel(
      "Gnocchi ai formaggi",
      "Ottimi soprattutto in Val Varaita, nella variante Ravioles",
      "https://www.piemontetopnews.it/wp-content/uploads/2020/02/Ravioles-2.jpg"
    ),
    new RecipeModel(
    "Tiramisù",
    "Classico dolce italiano con caffè e mascarpone",
    "https://www.milanocittastato.it/wp-content/uploads/2020/08/la-ricetta-classica-del-tiramisu-con-uova-savoiardi-e-mascarpone-1920x1080-1.jpg")
  ]


  selectedRecipe:RecipeModel
  constructor() {
    this.selectedRecipe=this.recipes[0]
   }

  ngOnInit(): void {
  }

}
