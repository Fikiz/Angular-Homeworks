import { Component, input } from '@angular/core';
import { Car } from '../../types/car.interface';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';
import { CarBrand } from '../../types/car-brand.enum';
import { CarFuel } from '../../types/car-fuel.enum';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatTooltipModule,
    NgIf
  ],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  car = input <Car | undefined>()

  brand = CarBrand;
  fuelType = CarFuel
}
