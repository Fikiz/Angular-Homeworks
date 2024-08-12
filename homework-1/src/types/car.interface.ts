import { CarBrand } from "./car-brand.enum";
import { CarColor } from "./car-color.enum";
import { CarFuel } from "./car-fuel.enum";
import { CarType } from "./car-type.enum";
import { CarTransmission } from "./car-transmission.enum";

export interface Car {
	id: string; // e.g.
	description: string; // e.g. Како нова, баба ја возела, etc.
	price: number; // e.g. 100.000, 200.000, etc.
	images: string[]; // array of image URLs
	type: CarType;
	year: number; // e.g. 2022, 2023, 2024, etc.
	color: CarColor;
	fuelType: CarFuel;
	distance: number; // e.g. 100.000, 200.000, etc.
	isNew: boolean; // true or false
	location: {
		// or interface
		city: string; // e.g. Skopje, etc.
		country: string; // e.g. Macedonia, etc.
	};
	brand: CarBrand;
	model: string; // e.g. X5, X7, S8, etc.
	enginePower: number; // e.g. 150 (kW), 200 (kW), etc.
	doors: number; // e.g. 2, 3, 4, etc.
	seats: number; // e.g. 2, 4, 6, etc.
	transmission: CarTransmission;
}