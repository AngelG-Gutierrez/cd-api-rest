import { Injectable } from '@nestjs/common';
import { Fish } from './entities/fish.entity';

@Injectable()
export class FishesService {
  private fishes: Fish[] = [
    {
      id: 1,
      name: 'Bubbles',
      species: 'Goldfish',
      color: 'Orange',
      owner: 'Ángel Antelmo',
    },
    {
      id: 2,
      name: 'Shadow',
      species: 'Betta Fish',
      color: 'Dark Blue',
      owner: 'Genaro Alfredo',
    },
    {
      id: 3,
      name: 'Flash',
      species: 'Neon Tetra',
      color: 'Neon Red and Blue',
      owner: 'Alejandro Hernández',
    },
    {
      id: 4,
      name: 'Spike',
      species: 'Pufferfish',
      color: 'Yellow and Brown',
      owner: 'Ángel Antelmo',
    },
    {
      id: 5,
      name: 'Ghost',
      species: 'Angelfish',
      color: 'Silver and Black',
      owner: 'Genaro Alfredo',
    },
  ];

  findAllFishes(): Fish[] {
    return this.fishes;
  }
}
