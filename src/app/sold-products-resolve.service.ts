import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from './product';
import { ProductService } from './product.service';
import { ProductFilter } from './product-filter';

@Injectable()
export class SoldProductsResolveService implements Resolve<Product[]> {

  constructor(private _productService: ProductService) {

  }
  resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {

    let filtro: ProductFilter = { state: 'sold'}; 
    return this._productService.getProducts(filtro);
  }

}
