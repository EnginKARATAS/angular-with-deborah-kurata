import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector:"pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["star.component.css"]
})
export class StarComponent implements OnChanges{

    @Input() rating: number = 0;
    cropWidth: number = 80;


    ngOnChanges(): void {
        this.cropWidth = this.rating * 80/5
    }

    onClick(): void{
        console.log(this.rating);
        console.log("hello");
    }
}