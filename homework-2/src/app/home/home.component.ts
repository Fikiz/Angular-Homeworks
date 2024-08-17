import { Component, signal,OnInit,OnDestroy, computed } from '@angular/core';
import { Car } from '../../types/car.interface';
import { CarsComponent } from '../cars/cars.component';
import { FiltersComponent } from '../filters/filters.component';
import { CarBrand } from '../../types/car-brand.enum';
import { CarType } from '../../types/car-type.enum';
import { CarFuel } from '../../types/car-fuel.enum';
import { CarTransmission } from '../../types/car-transmission.enum';
import { Subscription } from 'rxjs';
import { CarsService } from '../../services/cars.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarsComponent,FiltersComponent],
  providers:[CarsService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  cars = signal<Car[]> ([]);
  
  brand = signal<CarBrand>(CarBrand.None)
  type = signal<CarType>(CarType.None)
  fuel = signal<CarFuel>(CarFuel.None)
  transmission = signal<CarTransmission>(CarTransmission.None)
  priceFrom = signal<number>(1)
  priceTo = signal<number>(100000)
  subscription: Subscription = new Subscription();


  filteredCars = computed<Car[]>(() => {
    let filteredCars:Car[] = this.cars();

    if(this.brand() !== CarBrand.None){
      filteredCars = filteredCars.filter(
        (car) => car.brand === this.brand()
      )
    }
    if(this.type() !== CarType.None){
      filteredCars = filteredCars.filter(
        (car) => car.type === this.type()
      )
    }
    if(this.fuel() !== CarFuel.None) {
      filteredCars = filteredCars.filter(
        (car) => car.fuelType === this.fuel()
      )
    }
    if(this.transmission() !== CarTransmission.None){
      filteredCars = filteredCars.filter(
        (car) => car.transmission === this.transmission()
      )
    }
    if(this.priceFrom() > 0){
      filteredCars = filteredCars.filter(
        (car) => car.price >= this.priceFrom()
      )
    }
    if(this.priceTo() > 0){
      filteredCars = filteredCars.filter(
        (car) => car.price <= this.priceTo()
      )
    }



    return filteredCars;
  })

  constructor(private carService: CarsService) {}

  ngOnInit() {
    this.subscription = this.carService.cars.subscribe((cars: Car[]) => {
      this.cars.set(cars);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}


