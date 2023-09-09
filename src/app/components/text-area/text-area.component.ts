import { Component, Input } from "@angular/core";

@Component({
  selector: "app-text-area",
  templateUrl: "./text-area.component.html",
  styleUrls: ["./text-area.component.css"],
})
export class TextAreaComponent {
  @Input() formGroup: any;
  @Input() appearance: any;
  @Input() class: any;
  @Input() label: any;
  @Input() placeholder: any;
  @Input() type: any;
  @Input() formcontrolname: any;
}
