import { Component,input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarBrand } from '../../types/car-brand.enum';
import { CarFuel } from '../../types/car-fuel.enum';
import { CarTransmission } from '../../types/car-transmission.enum';
import { CarType } from '../../types/car-type.enum';
import { MatSliderModule } from '@angular/material/slider';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule, MatSliderModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  fuelOptions = Object.values(CarFuel);
  brandOptions = Object.values(CarBrand);
  transmissionOptions = Object.values(CarTransmission);
  typeOptions = Object.values(CarType);

  fuel = input<CarFuel>(CarFuel.None)
  onFuelChange = output<CarFuel>();

  brand = input<CarBrand>(CarBrand.None)
  onBrandChange = output<CarBrand>();  

  transmission = input<CarTransmission>(CarTransmission.None);
  onTransmissionChange = output<CarTransmission>();

  type = input <CarType>(CarType.None);
  onTypeChange = output<CarType>();


  priceFrom = input<number>(1);
  onPriceFromChange = output<number>();
  priceTo = input<number>(50000)
  onPriceToChange = output<number>();

  
}
