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

export class Address {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  street: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(100)
  number: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(9)
  postcode: string;

  @ApiPropertyOptional()
  @IsString()
  @Length(0, 100)
  @IsOptional()
  complement: string;
}

export class IntentionProduct {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty({
    each: true,
  })
  productId: number;

  @ApiProperty()
  @IsString({
    each: true,
  })
  @IsNotEmpty({
    each: true,
  })
  @Length(1, 50, {
    each: true,
  })
  title: string;
  @IsNotEmpty({
    each: true,
  })
  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString({
    each: true,
  })
  @Length(1, 50, {
    each: true,
  })
  @IsNotEmpty({
    each: true,
  })
  category: string;

  @ApiProperty()
  @IsString({
    each: true,
  })
  @Length(1, 255, {
    each: true,
  })
  description: string;
  @IsNotEmpty({
    each: true,
  })
  @ApiProperty()
  @IsString({
    each: true,
  })
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

  @ApiProperty({ type: Address })
  @ValidateNested({ each: true })
  address: Address;

  @ApiProperty({ type: [IntentionProduct] })
  @IsArray()
  @ValidateNested({ each: true })
  intentionProduct: IntentionProduct;
}
