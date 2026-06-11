import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FishesService } from './fishes.service';
import type { Fish } from './entities/fish.entity';
import { CreateFishDto } from './dto/create-fish.dto';
import { UpdateFishDto } from './dto/update-fish.dto';

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

  @Patch(':id')
  updateFish(@Param('id') id: string, @Body() FishData: UpdateFishDto): string {
    return this.fishesService.updateFish(parseInt(id), FishData as Fish);
  }

  @Delete(':id')
  deleteFish(@Param('id') id: string) {
    return this.fishesService.deleteFish(parseInt(id));
  }
}
