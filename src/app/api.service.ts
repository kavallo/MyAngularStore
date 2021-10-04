import { IProductos } from './models/productos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
private SERVER_URL = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  public get() {
    console.log('servicio');
		return this.httpClient.get<IProductos[]>(this.SERVER_URL + '/products');
  }

}
