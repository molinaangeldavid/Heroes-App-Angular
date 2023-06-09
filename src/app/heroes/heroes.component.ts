import { Component } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  selectedHero?: Hero;

  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private messageService: MessageService){
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  selectHero(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected Hero id=${hero.id}`)
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }


}
