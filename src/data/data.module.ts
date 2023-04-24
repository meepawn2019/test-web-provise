import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataResolver } from './data.resolver';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [DataResolver, DataService],
})
export class DataModule {}
