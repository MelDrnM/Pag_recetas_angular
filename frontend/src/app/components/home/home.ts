import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {
    this.recipes = this.recipeService.getAll();
    this.filteredRecipes = this.recipes;
  }

  filterRecipes(event: Event) {
  const input = event.target as HTMLInputElement;
  const query = input.value.toLowerCase();
  this.filteredRecipes = this.recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query)
  );
}

  goToRecipe(id: number) {
    this.router.navigate(['/recipe', id]);
  }
}
