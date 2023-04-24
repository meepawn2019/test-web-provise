import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { DataService } from './data.service';
import { Datum } from './entities/datum.entity';

@Resolver(() => Datum)
export class DataResolver {
  constructor(private readonly dataService: DataService) {}

  @Query(() => [Datum], { name: 'data' })
  findAll() {
    return this.dataService.findAll();
  }

  @Query(() => Datum, { name: 'datum' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.dataService.findOne(id);
  }
}
