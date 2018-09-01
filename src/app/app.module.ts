import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ExponentialStrengthPipe } from "./exponentialStrength.pipe";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { PowerBoosterComponent } from "./powerbooster.component";
import { PowerBoostCalculatorComponent } from "./powerbooster-calculator.component";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ExponentialStrengthPipe,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    HeroDetailComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
