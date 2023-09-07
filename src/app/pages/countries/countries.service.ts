import { Injectable } from "@angular/core";
import { HttpRequestsService } from "src/app/utils/http-requests.service";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  private basePath = "";

  constructor(private httpService: HttpRequestsService) {}

  getCountries() {
    return this.httpService.get(this.basePath + "independent?status=true");
  }
}
