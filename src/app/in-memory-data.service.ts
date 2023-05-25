import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes = [
      { id: 9, name: 'Dr Manhattan' },
      { id: 10, name: 'Wolverine' },
      { id: 11, name: 'Iron man' },
      { id: 12, name: 'Profesor X' },
      { id: 13, name: 'Elastic girl' },
      { id: 14, name: 'Drax' },
      { id: 15, name: 'Luke Skywalker' },
      { id: 16, name: 'Batman' },
      { id: 17, name: 'El zorro' }
    ];
    return (heroes);
  }

  anId(heroes: Hero[]): Number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1: 9; 
  }

}
