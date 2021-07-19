import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit {

    pageTitle: string = "Merhaba Angular";
    showImage: boolean = true;
    imageWidth: number = 50;
    imageMargin: number = 2;

    private _listfilter: string = "";
    get listFilter(): string{
        return this._listfilter;
    }
    set listFilter(value: string) {
        this._listfilter = value;
        console.log(this._listfilter);

        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];
    


    products: IProduct[] = [
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

    performFilter(filterBy: string): IProduct[]{ 
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct)=>
        product.productName.toLocaleLowerCase().includes(filterBy)
        )
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        this.listFilter = ""; 
    }
}