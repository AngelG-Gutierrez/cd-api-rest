import { Injectable, NotFoundException } from '@nestjs/common';
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

  getFish(id: number): Fish {
    const fish = this.fishes.find((f) => f.id === id);
    if (!fish) {
      throw new NotFoundException(`El pez con el id ${id} no fue encontrado`);
    }
    return fish;
  }

  createFish(fish: Fish): Fish {
    const fishData = {
      ...fish,
      id: this.fishes.length + 1,
    };
    this.fishes.push(fishData);
    return fishData;
  }

  updateFish(id: number, fish: Fish): string {
    const index = this.fishes.findIndex((fish) => fish.id === id);
    if (index !== -1) {
      this.fishes[index] = { ...this.fishes[index], ...fish };
    }
    return 'ok';
  }

  deleteFish(id: number): string {
    const fish = this.fishes.findIndex((item) => item.id == id);
    if (fish !== -1) {
      this.fishes.splice(fish, 1);
    }
    return 'deleted';
  }
}
