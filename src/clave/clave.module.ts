import { Module } from '@nestjs/common';
import { ClaveService } from './clave.service';
import { ClaveController } from './clave.controller';

@Module({
  providers: [ClaveService],
  controllers: [ClaveController]
})
export class ClaveModule {}
