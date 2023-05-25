import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private messageService: MessageService
    ) { }

  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes.")
    return heroes;
  }

  getHero(id:Number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero);
  }

}
