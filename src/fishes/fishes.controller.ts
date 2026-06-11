import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FishesService } from './fishes.service';
import type { Fish } from './entities/fish.entity';
import { CreateFishDto } from './dto/create-fish.dto';

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

  @Post()
  create(@Body() newFish: CreateFishDto): Fish {
    return this.fishesService.createFish(newFish as Fish);
  }
}
