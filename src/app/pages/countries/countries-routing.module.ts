import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountriesComponent } from "./countries/countries.component";
import { MaterialModule } from "src/app/app.material";

const routes: Routes = [{ path: "", component: CountriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MaterialModule],
})
export class CountriesRoutingModule {}
