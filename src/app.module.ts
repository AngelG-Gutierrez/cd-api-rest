import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { FishesModule } from './fishes/fishes.module';

@Module({
  imports: [CatsModule, FishesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
