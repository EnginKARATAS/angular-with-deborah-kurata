import { NgModule } from '@angular/core';
import { ProductsDetailComponent } from './products-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsDetailComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      { path: "products", component: ProductListComponent},
      { 
        path: "products/:id",
        canActivate: [ProductDetailGuard],
        component: ProductsDetailComponent,
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
