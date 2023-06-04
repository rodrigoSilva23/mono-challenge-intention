import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, Length, Max, Min, isNumber } from 'class-validator';

enum Order {
  asc = 'asc',
  desc = 'desc',
}
enum Sort {
  id = 'id',
  name = 'name',
  status = 'status',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export class PaginationDto {
  @ApiPropertyOptional()
  page?: number;
  @ApiPropertyOptional()
  size?: number;
  @ApiPropertyOptional({ enum: Sort })
  sort?: Sort;
  @ApiPropertyOptional({ enum: Order })
  order?: Order;
  @ApiPropertyOptional()
  search?: string;
}

export class PaginationResultDto {
  data: [];
  total: number;
  totalPages: number;
  currentPage: number;
}
