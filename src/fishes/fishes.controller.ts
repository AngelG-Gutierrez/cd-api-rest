import { Controller, Get, Param } from '@nestjs/common';
import { FishesService } from './fishes.service';
import type { Fish } from './entities/fish.entity';

@Controller('fishes')
export class FishesController {
  constructor(private fishesService: FishesService) {}

  @Get()
  findAll(): Fish[] {
    return this.fishesService.findAllFishes();
  }

  @Get(':id')
  getFish(@Param('id') id: string): Fish {
    return this.fishesService.getFish(parseInt(id));
  }
}
