import { Component , OnInit } from '@angular/core';


@Component({
    selector   : 'e-commerce-orders',
    templateUrl: './orders.component.html',
    styleUrls  : ['./orders.component.scss'],

})
export class EcommerceOrdersComponent implements OnInit
{
    constructor() { }

    ngOnInit() {

        console.log('hi');
    }
}
