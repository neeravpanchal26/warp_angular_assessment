import { Injectable } from "@angular/core";
import { HttpRequestsService } from "src/app/utils/http-requests.service";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  constructor(private httpService: HttpRequestsService) {}

  getCountries() {
    return this.httpService.get("independent?status=true");
  }
  getCountriesByRegion(region: any) {
    return this.httpService.get("region/" + region);
  }
}
