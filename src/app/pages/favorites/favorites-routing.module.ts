import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoriteComponent } from "./favorite/favorite.component";
import { FavoriteDetailComponent } from "./favorite-detail/favorite-detail.component";
import { MaterialModule } from "src/app/app.material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  { path: "", component: FavoriteComponent },
  { path: "favoriteDetail/:country", component: FavoriteDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
})
export class FavoritesRoutingModule {}
