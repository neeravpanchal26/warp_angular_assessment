import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { CountriesComponent } from "../pages/countries/countries/countries.component";

// Routing Array
const routes: Routes = [{ path: "", component: CountriesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [NavbarComponent];
