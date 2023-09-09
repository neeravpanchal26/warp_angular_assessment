import { Component, Input } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  @Input() appearance: any;
  @Input() label: any;
  @Input() type: any;
  @Input() placeholder: any;
  @Input() action: any;
}
