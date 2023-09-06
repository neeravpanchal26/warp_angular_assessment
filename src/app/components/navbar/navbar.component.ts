import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component } from "@angular/core";
import { Observable, map, shareReplay } from "rxjs";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  public title = environment.title;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
