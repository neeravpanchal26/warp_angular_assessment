import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FavoritesRoutingModule } from "./favorites-routing.module";
import { FavoriteComponent } from "./favorite/favorite.component";
import { FavoriteDetailComponent } from "./favorite-detail/favorite-detail.component";
import { InputComponent } from "src/app/components/input/input.component";
import { TextAreaComponent } from "src/app/components/text-area/text-area.component";

@NgModule({
  declarations: [
    FavoriteComponent,
    FavoriteDetailComponent,
    InputComponent,
    TextAreaComponent,
  ],
  imports: [CommonModule, FavoritesRoutingModule],
})
export class FavoritesModule {}
