import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoaderComponent } from "../components/loader/loader.component";
import { NavbarComponent } from "../components/navbar/navbar.component";

// Routing Array
const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("src/app/pages/countries/countries.module").then(
        (m) => m.CountriesModule
      ),
  },
  {
    path: "favorite",
    loadChildren: () =>
      import("src/app/pages/favorites/favorites.module").then(
        (m) => m.FavoritesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [NavbarComponent, LoaderComponent];
