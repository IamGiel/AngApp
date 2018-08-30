import { Component, OnInit } from "@angular/core";

// @Component decorator function that specifies the Angular metadata for the component
@Component({
  //metadata below:
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor() {}
  hero: hero = {
    id: 1,
    name: "Windstorm"
  };
  ngOnInit() {}
}
