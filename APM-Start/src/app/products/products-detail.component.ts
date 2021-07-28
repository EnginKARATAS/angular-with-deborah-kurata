import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})

export class ProductsDetailComponent implements OnInit {
  pageTitle: string = "product detail"
  product: IProduct | undefined;
  sub!: Subscription;
  errorMessage: string = "";

 
  //Router yönlendirmeyi yapar
  //ActivatedRoute yönlenmiş olan route bilgilerini okuyabiliyoruz
  constructor(private route: ActivatedRoute, private router: Router, private _productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    }
  }

 
  getProduct(id: number): void {
    this._productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }


  onBack(): void{
    this.router.navigate(["/products"])
  }
}
