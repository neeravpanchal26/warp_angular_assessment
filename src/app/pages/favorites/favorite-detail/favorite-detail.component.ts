import { Component } from "@angular/core";
import { FavoritesService } from "../favourites.service";
import { SnackbarService } from "src/app/utils/snackbar.service";
import { ActivatedRoute } from "@angular/router";
import { DatePipe } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ISaveComment } from "../favorites.interface";

@Component({
  selector: "app-favorite-detail",
  templateUrl: "./favorite-detail.component.html",
  styleUrls: ["./favorite-detail.component.css"],
})
export class FavoriteDetailComponent {
  public favorite: any = [];
  public commentsArray: any = [];
  public commentForm!: FormGroup;
  public country: any;

  constructor(
    private favoritesService: FavoritesService,
    private datePipe: DatePipe,
    private snackBar: SnackbarService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.country = this.route.snapshot.paramMap.get("country");
    let favorites = this.favoritesService.getFavorites();
    favorites.map((item: any) => {
      if (item[0].name.common === this.country) {
        this.favorite = item[0];
      }
    });
    this.favorite.localDateTime = this.datePipe.transform(
      new Date(),
      "yyyy-MM-ddTHH:mm:ss",
      this.favorite.timezones[0]
    );
    this.buildForm();
  }

  buildForm(): void {
    this.commentForm = this.formBuilder.group({
      pictureUrl: [],
      comment: ["", Validators.compose([Validators.required])],
    });
  }

  saveComment(e: any): void {
    if (e.touched && e.valid) {
      const param: ISaveComment = {
        pictureUrl: e.value.pictureUrl,
        comment: e.value.comment,
        timestamp: this.datePipe.transform(
          new Date(),
          "EEE, dd MMMM yyyy hh:mm a"
        ),
      };
      this.commentsArray.push(param);
      this.favorite.comments = this.commentsArray;

      let favorites = this.favoritesService.getFavorites();
      favorites.map((item: any) => {
        if (item[0].name.common === this.country) {
          item[0].comments = this.favorite.comments;
        }
      });
      this.favoritesService.saveFavorites(favorites);
    }
  }
}
