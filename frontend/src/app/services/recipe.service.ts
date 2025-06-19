import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Pasta con Tomate',
      image: 'assets/pasta.JPG',
      ingredients: ['Pasta', 'Tomate', 'Ajo', 'Sal'],
      instructions: 'Cocina la pasta. Sofríe el tomate con ajo. Mezcla todo y sirve caliente.'
    },
    {
      id: 2,
      name: 'Ensalada de Pollo',
      image: 'assets/ensalada.JPG',
      ingredients: ['Pollo cocido', 'Lechuga', 'Tomate', 'Vinagre', 'Aceite de oliva'],
      instructions: 'Corta el pollo y mézclalo con los vegetales. Agrega aderezo al gusto.'
    },
    {
      id: 3,
      name: 'Arroz con Verduras',
      image: 'assets/arroz.JPG',
      ingredients: ['Arroz', 'Zanahoria', 'Arveja', 'Cebolla', 'Aceite'],
      instructions: 'Sofríe las verduras y agrega el arroz cocido. Mezcla bien.'
    },
    {
      id: 4,
      name: 'Tortilla de Papas',
      image: 'assets/tortilla.JPG',
      ingredients: ['Papa', 'Huevo', 'Cebolla', 'Aceite', 'Sal'],
      instructions: 'Fríe las papas y mezcla con huevo batido. Cocina en sartén.'
    },
    {
      id: 5,
      name: 'Crema de Auyama',
      image: 'assets/crema.JPG',
      ingredients: ['Auyama', 'Papa', 'Cebolla', 'Sal', 'Agua'],
      instructions: 'Hierve todo y licúa. Sirve caliente.'
    },
    {
      id: 6,
      name: 'Arepas Rellenas',
      image: 'assets/arepa.JPG',
      ingredients: ['Harina de maíz', 'Queso', 'Mantequilla', 'Sal'],
      instructions: 'Prepara la masa, rellena con queso y cocina a la plancha.'
    },
    {
      id: 7,
      name: 'Huevos Pericos',
      image: 'assets/huevos.JPG',
      ingredients: ['Huevos', 'Cebolla', 'Tomate', 'Sal', 'Aceite'],
      instructions: 'Sofríe cebolla y tomate. Añade huevos batidos y cocina.'
    },
    {
      id: 8,
      name: 'Batido de Banano',
      image: 'assets/banano.JPG',
      ingredients: ['Banano', 'Leche', 'Miel'],
      instructions: 'Licúa todos los ingredientes y sirve frío.'
    }
  ];

  getAll(): Recipe[] {
    return this.recipes;
  }

  getById(id: number): Recipe | undefined {
    return this.recipes.find(r => r.id === id);
  }
}
