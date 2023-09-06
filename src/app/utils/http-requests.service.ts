import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpRequestsService {
  private apiUrl = environment.api;
  constructor(private httpClient: HttpClient) {}

  get(urlAppend: any): Observable<any> {
    return this.httpClient.get(this.apiUrl + urlAppend) as Observable<any>;
  }

  post(urlAppend: any, param: any): Observable<any> {
    return this.httpClient.post(
      this.apiUrl + urlAppend,
      param
    ) as Observable<any>;
  }
}
