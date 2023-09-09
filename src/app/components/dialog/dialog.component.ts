import { DatePipe } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"],
})
export class DialogComponent {
  public country: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { country: any },
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.country = this.data.country;
    this.country.localDateTime = this.datePipe.transform(
      new Date(),
      "yyyy-MM-ddTHH:mm:ss",
      this.country.timezones[0]
    );
  }
}
