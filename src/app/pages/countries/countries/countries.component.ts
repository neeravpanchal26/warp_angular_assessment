import { Component } from "@angular/core";
import { CountriesService } from "../countries.service";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent {
  public countries: any;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }
}
