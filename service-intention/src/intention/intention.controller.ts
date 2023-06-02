import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { IntentionService } from './intention.service';
import { CreateIntentionDto } from './dto/create-intention.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from './dto/pagination.Intention.dto';

@ApiTags('intention')
@Controller('intention')
export class IntentionController {
  constructor(private readonly intentionService: IntentionService) {}

  @Post()
  create(@Body() createIntentionDto: CreateIntentionDto) {
    return this.intentionService.create(createIntentionDto);
  }

  @Get()
  findAll() {
    return this.intentionService.findAll();
  }

  @Get('pages?')
  pagination(@Query() params: PaginationDto) {
    return this.intentionService.paginate(params);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intentionService.findOne(+id);
  }
}
