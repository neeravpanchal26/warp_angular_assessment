import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit {
  @Input() formGroup: any;
  @Input() appearance: any;
  @Input() class: any;
  @Input() label: any;
  @Input() placeholder: any;
  @Input() type: any;
  @Input() formcontrolname: any;

  constructor() {}

  ngOnInit(): void {}
}
