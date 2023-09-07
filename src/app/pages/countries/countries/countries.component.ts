import { Component } from "@angular/core";
import { CountriesService } from "../countries.service";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent {
  public countries: any;
  public regions: any;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
      },
      complete: () => {
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

  filterByRegion(e: any): void {
    this.countriesService.getCountriesByRegion(e).subscribe({
      next: (data) => {
        this.countries = data;
      },
    });
  }
}
