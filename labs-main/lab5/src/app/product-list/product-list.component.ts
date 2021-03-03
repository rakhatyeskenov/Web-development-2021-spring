import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products} from '../products';
import { CartService } from '../cart.service';
import { productsFirstCategory } from '../productsFirstCategory';
import { productsSecondCategory } from '../productsSecondCategory';
import { productsThirdCategory } from '../productsThirdCategory';
import { productsFourthCategory } from '../productsFourthCategory';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product;  
  products = products;
  productsFirstCategory = productsFirstCategory;
  productsSecondCategory = productsSecondCategory;
  productsThirdCategory = productsThirdCategory;
  productsFourthCategory = productsFourthCategory;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
     // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('productId'));

    // // Find the product that correspond with the id provided in route.
    // this.product = products.find(product => product.id === productIdFromRoute);
  }

  sharetotelegram(productsFirstCategory){
      window.open(`https://t.me/share/url?url=http://localhost:4200/products/${productsFirstCategory.link}`)
  }

  sharetowhatsapp(product) {
        window.open(`whatsapp://send?text=http://localhost:4200/products/${productsFirstCategory.link}`)
    }

  removeProduct(index: number) {
    this.productsFirstCategory = this.productsFirstCategory.filter((x) => x.id !== index); 
  }
  

}