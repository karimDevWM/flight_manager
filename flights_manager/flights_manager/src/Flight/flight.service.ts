import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Flight } from './schemas/flight.schema';
import { CreateFlightDto } from './dto/createFlight.dto';
import { ReadFlightDto } from './dto/readFlight.dto';

@Injectable()
export class FlightService {
  constructor(@InjectModel(Flight.name) private flightModel: Model<Flight>) {}

  async create(createFlightDto: CreateFlightDto): Promise<Flight> {
    const createdFlight = new this.flightModel(createFlightDto);
    return createdFlight.save();
  }

  async findAll(): Promise<Flight[]> {
    return this.flightModel.find().exec();
  }

  async findByFlightNumber(flightNumber: string): Promise<Flight> {
    return this.flightModel.findOne({ flightNumber: flightNumber });
  }

  // async exist(readFlightDto: ReadFlightDto): Promise<Flight> {
  //   if(readFlightDto.flightNumber) {
  //     return this.flightModel.
  //   }
  // }
}
