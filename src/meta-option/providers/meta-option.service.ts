import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from '../meta-option.model';
import { Repository } from 'typeorm';
import { CreateMetaOptionsDto } from '../DTOs/CreateMetaOptionsDto';

@Injectable()
export class MetaOptionService {
constructor(
    @InjectRepository(MetaOption)
    private metaOptionRepository: Repository<MetaOption>,
) { }
public async createMetaOption(createMetaOptionDto: CreateMetaOptionsDto) {
    const metaOption = this.metaOptionRepository.create(createMetaOptionDto);
    return await this.metaOptionRepository.save(metaOption);
}
}
