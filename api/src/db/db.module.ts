import { Global, Module } from '@nestjs/common';
import { databaseProvider } from '../drizzle.provider';

@Global()
@Module({
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class DatabaseModule {}
