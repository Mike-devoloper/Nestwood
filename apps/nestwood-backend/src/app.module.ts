import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config"
import { DatabaseModule } from './database/database.module';
import { ComponentsModule } from './components/components.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver} from '@nestjs/apollo';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    playground: true,
    uploads: false,
    autoSchemaFile: true,
  }),
    ConfigModule.forRoot(),
    DatabaseModule,
    ComponentsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
