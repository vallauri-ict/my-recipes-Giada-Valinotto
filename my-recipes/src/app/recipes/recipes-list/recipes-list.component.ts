import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Input() recipe: RecipeModel;

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
      "Ottimi soprattutto in Val AVraita, nella variante Ravioles",
      "https://lh3.googleusercontent.com/proxy/_5bUPbEnYEOnaUqLu7En8_1kF1IgeBiBifGrfxsg2GvgQ-LPazFdqjCDDHVFdd8HVrQa1V-No38_oas_e8laHGRewIBRiA3oJGoBkowJRw9_4swijiFXxkmnknHAPn31psQhrvrYMSgGIRH0VXzm46tues7iq_DtTd9U_L1ojlsa"
    ),
    new RecipeModel(
    "Tiramisù",
    "Classico dolce italiano con caffè e mascarpone",
    "https://www.milanocittastato.it/wp-content/uploads/2020/08/la-ricetta-classica-del-tiramisu-con-uova-savoiardi-e-mascarpone-1920x1080-1.jpg")
  ]

  selectedRecipe: RecipeModel;
  constructor() {
    this.selectedRecipe=this.recipes[0];
  }

  ngOnInit(): void {
  }

}
