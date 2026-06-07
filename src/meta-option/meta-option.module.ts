import { Module } from '@nestjs/common';
import { MetaOptionService } from './providers/meta-option.service';
import { MetaOptionController } from './meta-option.controller';

@Module({
  providers: [MetaOptionService],
  controllers: [MetaOptionController]
})
export class MetaOptionModule {}
