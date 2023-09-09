import { Component } from "@angular/core";
import { FavoritesService } from "../favourites.service";
import { SnackbarService } from "src/app/utils/snackbar.service";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"],
})
export class FavoriteComponent {
  public favorites: any = [];

  constructor(
    private favoritesService: FavoritesService,
    private snackBar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(selectedValue: any): void {
    const indexToRemove = this.favorites.findIndex(
      (favorite: any) => favorite[0].name.common === selectedValue
    );
    if (indexToRemove !== -1) {
      this.favorites.splice(indexToRemove, 1);
    }
    this.favoritesService.saveFavorites(this.favorites);
    this.snackBar.showSnackbar(
      selectedValue + " removed from your favourite list!"
    );
  }
}
