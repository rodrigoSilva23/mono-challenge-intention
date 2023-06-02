import { Injectable } from '@nestjs/common';
import { CreateIntentionDto } from './dto/create-intention.dto';
import { IntentionRepository } from './repository/intention.repository';
import { PaginationDto } from './dto/pagination.Intention.dto';

@Injectable()
export class IntentionService {
  constructor(private repository: IntentionRepository) {}

  async create(createIntentionDto: CreateIntentionDto) {
    try {
      return await this.create(createIntentionDto);
    } catch (error) {
      console.error('Error', error);
    }
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async paginate(paginationDto: PaginationDto) {
    const {
      page = 0,
      size = 10,
      sort = 'name',
      order = 'desc',
      search = '',
    } = paginationDto;
    const { results, totalItems } = await this.repository.paginate(
      page,
      size,
      sort,
      order,
      search,
    );
    const totalPages = Math.ceil(totalItems / size) - 1;
    const currentPage = Number(page);

    return {
      ...results,
      pagination: {
        length: totalItems,
        size,
        lastPage: totalPages,
        page: currentPage,
        startIndex: currentPage * size,
        endIndex: currentPage * size + (size - 1),
      },
    };
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }
}
