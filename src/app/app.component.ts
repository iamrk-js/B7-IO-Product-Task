import { Component } from '@angular/core';
import { IproductCatg, Iproducts } from './shared/model/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ioProducts';

  productArray: Array<Iproducts> = [
    {
      productName: "Samsung",
      pDescription: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Non autem reiciendis architecto necessitatibus eaque quia unde enim soluta illum eligendi!`,
      pCategory: "Catlog"
    },
    {
      productName: "Samsung",
      pDescription: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Non autem reiciendis architecto necessitatibus eaque quia unde enim soluta illum eligendi!`,
      pCategory: "Product"
    }
  ]

  onProdcutsAdd(data:Iproducts){
    console.log(data)
    this.productArray.push(data)
  }
}
