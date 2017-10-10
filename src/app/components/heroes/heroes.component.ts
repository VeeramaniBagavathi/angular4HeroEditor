import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "../../domain/hero";
import {HEROES} from "../../data/mock-heroes";
import {HeroService} from "../../service/hero.service";

@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private  heroService: HeroService,
              private router: Router) {
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(response => this.heroes = response);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


