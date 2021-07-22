import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: "root"
})   
export class ProductService{
    getProducts(): IProduct[]{
        return[
            {
                "productId": 1,
                "productName": "Qualcom Saat",
                "productCode": "a-bc",
                "releaseDate": "march 18 2021",
                "price": 100,
                "description": "cool saat",
                "starRating": 4.5,
                "imageUrl": "assets/images/garden_cart.png"
            },
            {
                "productId": 1,
                "productName": "cant Saat",
                "productCode": "ab-c",
                "releaseDate": "march 18 2021",
                "price": 100,
                "description": "cool saat",
                "starRating": 3.5,
                "imageUrl": "assets/images/hammer.png"
            }
        ]
        
    }
}