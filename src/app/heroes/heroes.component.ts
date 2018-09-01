import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
// import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";

// @Component decorator function that specifies the Angular metadata for the component
@Component({
  //metadata below:
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  // selectedHero: Hero;
  heroes: Hero[];
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  // hero: Hero = {
  //   id: 1,
  //   name: "Hero's Name",
  //   birthday: new Date("1988, 3, 15")
  // };

  // get format() {
  //   return this.toggle ? "shortDate" : "fullDate";
  // }
  // toggleFormat() {
  //   this.toggle = !this.toggle;
  // }

  // power = 5;
  // factor = 1;

  ngOnInit() {
    this.getHeroes();
  }
}
