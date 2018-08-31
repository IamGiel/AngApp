import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";

// @Component decorator function that specifies the Angular metadata for the component
@Component({
  //metadata below:
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor() {}
  hero: Hero = {
    id: 1,
    name: "Hero's Name",
    birthday: new Date("1988, 3, 15")
  };
  get format() {
    return this.toggle ? "shortDate" : "fullDate";
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }

  power = 5;
  factor = 1;

  ngOnInit() {}
}
