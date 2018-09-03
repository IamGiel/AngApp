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
  add(name: String): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService
      .addHero({ name } as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeroes();
  }
}
