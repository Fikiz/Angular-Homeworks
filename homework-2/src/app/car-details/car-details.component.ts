import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../types/car.interface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
  providers: [CarsService]
})
export class CarDetailsComponent implements OnInit {
  car!: Car;

  constructor(private route: ActivatedRoute, private carsService: CarsService) {}

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');
    if (carId) {
      this.carsService.cars.subscribe(cars => {
        this.car = cars.find(car => car.id === carId) as Car;
      });
    }
  }
}
