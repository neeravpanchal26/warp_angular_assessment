import { Component, Input } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent {
  @Input() appearance: any;
  @Input() label: any;
  @Input() type: any;
  @Input() placeholder: any;
  @Input() action: any;
}
