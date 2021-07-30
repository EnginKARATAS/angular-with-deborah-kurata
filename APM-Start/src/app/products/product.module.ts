import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailComponent } from './products-detail.component';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsDetailComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild([
      { path: "products", component: ProductListComponent},
      { 
        path: "products/:id",
        canActivate: [ProductDetailGuard],
        component: ProductsDetailComponent,
      }
    ])
  ]
})
export class ProductModule { }
