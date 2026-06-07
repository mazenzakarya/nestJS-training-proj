import { Module } from '@nestjs/common';
import { MetaOptionService } from './providers/meta-option.service';
import { MetaOptionController } from './meta-option.controller';
import { MetaOption } from './meta-option.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [MetaOptionService],
  controllers: [MetaOptionController],
  imports: [TypeOrmModule.forFeature([MetaOption])],
})
export class MetaOptionModule {}
