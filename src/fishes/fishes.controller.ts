import { Controller, Get } from '@nestjs/common';
import { FishesService } from './fishes.service';
import { Fish } from './entities/fish.entity';

@Controller('fishes')
export class FishesController {
  constructor(private fishesService: FishesService) {}

  @Get()
  findAll(): Fish[] {
    return this.fishesService.findAllFishes();
  }
}
