import { ApiPropertyOptional } from '@nestjs/swagger';
import { Length, Max, Min } from 'class-validator';

enum Order {
  asc = 'asc',
  desc = 'desc',
}
export class PaginationDto {
  @ApiPropertyOptional()
  page?: number;
  @ApiPropertyOptional()
  @Min(0)
  @Max(100)
  size?: number;
  @ApiPropertyOptional()
  sort?: string;
  @ApiPropertyOptional({ enum: Order })
  order?: Order;
  @ApiPropertyOptional()
  @Length(0, 255)
  search?: string;
}

export class PaginationResultDto {
  data: [];
  total: number;
  totalPages: number;
  currentPage: number;
}
