import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config"
import { DatabaseModule } from './database/database.module';
import { ComponentsModule } from './components/components.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver} from '@nestjs/apollo';
import { T } from './libs/types/common';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    playground: true,
    uploads: false,
    autoSchemaFile: true,
    formatError: (error: T) => {
      const graphqlErrorFormatter = {
        code: error?.extensions.code,
        message: 
        error?.extensions?.exception?.response?.message || error?.extensions?.response?.message || error?.message,
      }
      console.log("GRAPHQL GLABAL ERROR", graphqlErrorFormatter.message);
      // console.dir(error, {depth: null});
      return graphqlErrorFormatter;
    }
  }),
    ConfigModule.forRoot(),
    DatabaseModule,
    ComponentsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
