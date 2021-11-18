import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : IngredientModel[]=[
    new IngredientModel("Spaghetti",500),
    new IngredientModel("Pomodori datterini",850)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
