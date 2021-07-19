import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit {
    ngOnInit(): void {
        console.log("In OnInit")
    }
    pageTitle: string = "Merhaba Angular";
    showImage: boolean = true;
    imageWidth: number = 50;
    imageMargin: number = 2;

    listFilter: string = "cart";

    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Qualcom Saat",
            "productCode": "abC",
            "releaseDate": "march 18 2021",
            "price": 100,
            "description": "cool saat",
            "starRating": 4,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 1,
            "productName": "Qualcom Saat",
            "productCode": "abC",
            "releaseDate": "march 18 2021",
            "price": 100,
            "description": "cool saat",
            "starRating": 4,
            "imageUrl": "assets/images/hammer.png"
        }
    ]

    toggleImage(): void {
        this.showImage = !this.showImage;
    }    
}