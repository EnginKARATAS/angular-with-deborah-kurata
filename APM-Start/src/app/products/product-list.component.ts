import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Merhaba Angular';
  showImage: boolean = true;
  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(private _productService: ProductService) {}

  private _listfilter: string = '';
  get listFilter(): string {
    return this._listfilter;
  }
  set listFilter(value: string) {
    this._listfilter = value;
    console.log(this._listfilter);

    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];

  products: IProduct[] = [];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.listFilter = '';
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
  }
}
