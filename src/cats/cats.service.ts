import { Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    {
      id: 1,
      name: 'Bigotes',
      breed: 'Siamese',
      color: 'Seal Point',
      eyeColor: 'Blue',
    },
    {
      id: 2,
      name: 'Nala',
      breed: 'Persian',
      color: 'White',
      eyeColor: 'Green',
    },
    {
      id: 3,
      name: 'Tom',
      breed: 'Bobtail',
      color: 'Tabby',
      eyeColor: 'Amber',
    },
    {
      id: 4,
      name: 'Luna',
      breed: 'Munchkin',
      color: 'Black',
      eyeColor: 'Yellow',
    },
    {
      id: 5,
      name: 'Simba',
      breed: 'Bengal',
      color: 'Spotted Rosette',
      eyeColor: 'Aqua',
    },
  ];

  findAllCats(): Cat[] {
    return this.cats;
  }

  getCat(id: number): Cat {
    const cat = this.cats.find((item) => item.id == id);
    if (!cat) {
      throw new NotFoundException(`El gato con el id ${id} no fue encontrado`);
    }
    return cat;
  }

  createCat(cat: Cat): Cat {
    const catData = {
      ...cat,
      id: this.cats.length + 1,
    };
    this.cats.push(catData);
    return catData;
  }

  updateCat(id: number, cat: Cat): string {
    const index = this.cats.findIndex((cat) => cat.id === id);
    if (index !== -1) {
      this.cats[index] = { ...this.cats[index], ...cat };
    }
    return 'ok';
  }

  deleteCat(id: number): string {
    const cat = this.cats.findIndex((item) => item.id == id);
    if (cat !== -1) {
      this.cats.splice(cat, 1);
    }
    return 'deleted';
  }
}
