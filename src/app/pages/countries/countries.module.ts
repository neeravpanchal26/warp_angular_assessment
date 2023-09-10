import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CountriesRoutingModule } from "./countries-routing.module";
import { CountriesComponent } from "./countries/countries.component";
import { SelectComponent } from "src/app/components/select/select.component";
import { SearchComponent } from "src/app/components/search/search.component";
import { CardComponent } from "src/app/components/card/card.component";
import { DialogComponent } from "src/app/components/dialog/dialog.component";

@NgModule({
  declarations: [
    CountriesComponent,
    SelectComponent,
    SearchComponent,
    CardComponent,
    DialogComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule],
})
export class CountriesModule {}
