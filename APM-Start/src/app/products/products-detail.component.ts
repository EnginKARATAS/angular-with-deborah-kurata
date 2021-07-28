import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  pageTitle: string = "product detail"
  //Router yönlendirmeyi yapar
  //ActivatedRoute yönlenmiş olan route bilgilerini okuyabiliyoruz
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.pageTitle = `product detail - id: ${id}`;
  }

  onBack(): void{
    this.router.navigate(["/products"])
  }
}
