import { Module } from '@nestjs/common';
import { FishesService } from './fishes.service';
import { FishesController } from './fishes.controller';

@Module({
  providers: [FishesService],
  controllers: [FishesController]
})
export class FishesModule {}
