import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateFlightDto } from './dto/createFlight.dto';
import { FlightService } from './flight.service';
import { Flight } from './schemas/flight.schema';

@Controller('Flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post('/create')
  async create(@Body() createFlightDto: CreateFlightDto): Promise<Flight> {
    return await this.flightService.create(createFlightDto);
  }

  @Get('/flights')
  async allFlights(): Promise<Flight[]> {
    return await this.flightService.findAll();
  }

  @Post('/:flightNumber')
  async findOne(
    @Param('flightNumber') flightNumber: string,
  ): Promise<Flight | null> {
    return await this.flightService.findByFlightNumber(flightNumber);
  }
}
