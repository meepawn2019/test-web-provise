import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Datum {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  parentId: string;

  @Field(() => Date, { description: 'Example field (placeholder)' })
  createdAt: Date;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  cost: number;

  @Field(() => [Datum], { description: 'Example field (placeholder)' })
  children: Datum[];
}

export interface Company extends Datum {
  children: Datum[];
}

export interface Travel {
  id: string;
  companyId: string;
  employeeName: string;
  departure: string;
  destination: string;
  price: string;
  createdAt: Date;
}
