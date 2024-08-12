import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import carsJson from '../data/cars.json'
import { Car } from '../types/car.interface';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HomeComponent,AboutComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  cars = signal<Car[]>(carsJson as Car[]);
  selectedPage = signal<'home' | 'about' | 'contact'>('home')
  
  handleSelectedPage(value:'home' | 'about' | 'contact') {
    this.selectedPage.update(() => value)
  }
}
