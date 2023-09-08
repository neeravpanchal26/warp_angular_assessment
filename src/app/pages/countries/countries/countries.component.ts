import { Component } from "@angular/core";
import { CountriesService } from "../countries.service";
import { SnackbarService } from "src/app/utils/snackbar.service";
import { FavoritesService } from "../favourites.service";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent {
  public originalCountries: any;
  public countries: any;
  public regions: any;
  public favorites: any = [];

  constructor(
    private countriesService: CountriesService,
    private snackBar: SnackbarService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
      },
      complete: () => {
        this.originalCountries = JSON.stringify(this.countries);
        this.setupRegions();
        this.favorites = this.favoritesService.getFavorites();
        this.favorites.map((item: any) => {
          this.countries.map((country: any) => {
            if (country.name.common === item[0].name.common) {
              country.checked = true;
            }
          });
        });
      },
    });
  }

  setupRegions(): void {
    let tempRegion: any = [];
    this.countries.map((data: any) => {
      tempRegion.push(data.region);
    });
    this.regions = [...new Set(tempRegion)];
  }

  filterByRegion = (e: any): void => {
    this.countriesService.getCountriesByRegion(e).subscribe({
      next: (data) => {
        this.countries = data;
      },
    });
  };

  searchByNameOrFifa = (e: any): void => {
    let searchValue = e.target.value;
    const foundCountry = this.countries.filter(
      (country: any) =>
        country.name.common === searchValue || country.fifa === searchValue
    );
    if (searchValue === "" || foundCountry.length === 0) {
      this.countries = JSON.parse(this.originalCountries);
    } else {
      this.countries = foundCountry;
    }
  };

  chooseFavourite = (e: any): void => {
    let selected = e.checked;
    let selectedValue = e.value;
    if (selected) {
      this.favorites.push(
        this.countries.filter(
          (country: any) => country.name.common === selectedValue
        )
      );
      this.snackBar.showSnackbar(
        selectedValue + " added to your favourite list!"
      );
    } else {
      const indexToRemove = this.favorites.findIndex(
        (favorite: any) => favorite[0].name.common === selectedValue
      );
      if (indexToRemove !== -1) {
        this.favorites.splice(indexToRemove, 1);
      }
      this.snackBar.showSnackbar(
        selectedValue + " removed from your favourite list!"
      );
    }
  };

  saveFavourite = (): void => {
    this.favoritesService.saveFavorites(this.favorites);
    this.snackBar.showSnackbar("Favourite list saved/updated.");
  };
}
