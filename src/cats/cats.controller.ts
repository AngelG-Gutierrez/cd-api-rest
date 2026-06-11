import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import type { Cat } from './entities/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAllCats(): Cat[] {
    return this.catsService.findAllCats();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Cat {
    return this.catsService.getCat(parseInt(id));
  }

  @Post()
  createCat(@Body() newCat: CreateCatDto): Cat {
    return this.catsService.createCat(newCat as Cat);
  }
}
