import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackendUriProvider } from './app-settings';
import { CategoryService } from './category.service';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsResolveService } from './product-details-resolve.service';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductResetComponent } from './product-reset/product-reset.component';
import { ProductService } from './product.service';
import { ProductsCollectionComponent } from './products-collection/products-collection.component';
import { SoldProductsResolveService } from './sold-products-resolve.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './user.service';
import { PublicationDatePipe } from './publication-date.pipe';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
| Blue Path                                                        |
|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
| No olvides declarar PublicationDatePipe en el módulo.            |
|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductFilterComponent,
    ProductResetComponent,
    ProductComponent,
    ProductsCollectionComponent,
    UserProfileComponent,
    PublicationDatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ConfirmDialogModule,
    AppRoutingModule
  ],
  providers: [
    BackendUriProvider,
    CategoryService,
    ConfirmationService,
    ProductDetailsResolveService,
    ProductService,
    SoldProductsResolveService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
