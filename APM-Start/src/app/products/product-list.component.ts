import { Component } from "@angular/core";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html"
})

export class ProductListComponent {
    pageTitle: string = "Merhaba Angular";
    showImage: boolean = true;
    imageWidth: number = 50;
    imageMargin: number = 2;

    products: any[] = [
        {
            "productId": 1,
            "productName": "Qualcom Saat",
            "quantityPerUnit": 10,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 2,
            "productName": "Casio Saat",
            "quantityPerUnit": 14,
            "imageUrl": "assets/images/hammer.png"

        }
    ]

    toggleImage(): void {
        this.showImage = !this.showImage;
    }    
}