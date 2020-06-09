import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { PostgresTypeORMConfigService } from './postgres-typeorm-conf.service';

@Module({
    imports : [
        TypeOrmModule.forRootAsync({
            imports : [ConfigModule],
            useClass : PostgresTypeORMConfigService,
        }),
    ]
})
export class DatabaseModule {}
