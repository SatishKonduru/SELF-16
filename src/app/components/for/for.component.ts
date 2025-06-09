import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css'],
})
export class ForComponent {
  fruits = ['Apple', 'Banana', 'Mango'];
  users = [{ name: 'Satish' }, { name: 'Renu' }, { name: 'RSK' }];
  products = [
    { id: 1, name: 'Laptop', inStock: true },
    { id: 2, name: 'Phone', inStock: false },
    { id: 3, name: 'Mouse', inStock: true },
    { id: 4, name: 'Keyboard', inStock: false },
    { id: 5, name: 'Monitor', inStock: true },
  ];
  categories = [
    { name: 'Fruits', items: ['Apple', 'Banana'] },
    { name: 'Dairy', items: ['Milk', 'Cheese'] },
  ];

  myObj = {
    name: 'Satish',
    role: 'Developer',
    location: 'India',
  };

  cities: string[] = ['Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'Delhi'];
  selectedCity: string = ''; // Holds the selected value
}
