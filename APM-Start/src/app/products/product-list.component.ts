import { Component } from "@angular/core";

@Component({ 
    selector:"pm-products",
    templateUrl:"./product-list.component.html"
})

export class ProductListComponent{
    pageTitle:string = "Merhaba Angular";
    products: any[] = [
        {
            "productId" : 1,
            "productName" : "Qualcom Saat",
            "quantityPerUnit" : 10
        },
        {
            "productId" : 2,
            "productName" : "Casio Saat",
            "quantityPerUnit" : 14
        }
    ]
}