import { Component } from "@angular/core";
import { CountriesService } from "../countries.service";

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

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
      },
      complete: () => {
        this.originalCountries = JSON.stringify(this.countries);
        this.setupRegions();
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
    } else {
      const indexToRemove = this.favorites.findIndex(
        (favorite: any) => favorite[0].name.common === selectedValue
      );
      if (indexToRemove !== -1) {
        this.favorites.splice(indexToRemove, 1);
      }
    }
  };
}
