import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from './products';
import { CartService } from './cart.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpenCategory: boolean = false;
  firstCategory:string = 'Camera & Photo';
  secondCategory:string = 'Car & Vehicle Electronics';
  thirdCategory:string = 'Computers & Accessories';
  fourthCategory:string = 'GPS, Finders & Accessories';



  showCategories() {
    this.isOpenCategory = !this.isOpenCategory;
  }

  constructor(private router: Router) {

  }


  jumpToCategoryList(cds) { 
    this.router.navigate(['/category']);
  }


}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/