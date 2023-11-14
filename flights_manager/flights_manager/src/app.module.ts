import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightModule } from './Flight/flight.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo/flights_manager'),
    FlightModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
