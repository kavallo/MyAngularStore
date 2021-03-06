import { IProductos } from './../models/productos';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  products: IProductos[] = [];
  // products= [];
	constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.get().subscribe((data: any[]) => {
      console.log('datos...');
			console.log(data);
			this.products = data;
    })
  }

  mensaje() {
    alert('mensaje');
  }
}
