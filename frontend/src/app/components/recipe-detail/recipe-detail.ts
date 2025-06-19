import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
  recipe: Recipe | undefined;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipe = this.recipeService.getById(id);
  }
}
