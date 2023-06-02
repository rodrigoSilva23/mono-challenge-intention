import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  Length,
  IsArray,
  ValidateNested,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class AddressDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  street: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  number: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  postcode: string;

  @ApiPropertyOptional()
  @IsString()
  @Length(0, 100)
  @IsOptional()
  complement: string;
}

export class IntentionProductDto {
  @ApiProperty()
  @IsNumber()
  productId: number;
  @ApiProperty()
  @IsString()
  @Length(1, 50)
  title: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  @Length(1, 50)
  category: string;

  @ApiProperty()
  @IsString()
  @Length(1, 255)
  description: string;

  @ApiProperty()
  @IsString()
  image: string;
}
enum IntentionStatus {
  Pending = 'pending',
  Confirmed = 'confirmed',
  Canceled = 'canceled',
}

export class CreateIntentionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  name: string;
  @ApiProperty({ enum: IntentionStatus })
  status: IntentionStatus;

  @ApiProperty({ type: AddressDto })
  address: AddressDto;
  @ApiProperty({ type: [IntentionProductDto] })
  @IsArray()
  @ValidateNested({ each: true })
  intentionProduct: IntentionProductDto[];
}
