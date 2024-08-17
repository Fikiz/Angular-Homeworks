import { Component, Input } from '@angular/core';
import { Car } from '../../types/car.interface';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common'; 
import { CarComponent } from '../car/car.component';


@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatTooltipModule,
    CarComponent
  ],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  @Input() cars: Car[] = [];
}
