import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FavoritesService {
  private readonly localStorageKey = "favorites";

  getFavorites(): any[] {
    const favoritesJson = localStorage.getItem(this.localStorageKey);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  }

  saveFavorites(favorites: any[]): void {
    const favoritesJson = JSON.stringify(favorites);
    localStorage.setItem(this.localStorageKey, favoritesJson);
  }
}
