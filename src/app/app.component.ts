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


  onAddProduct(pname : HTMLInputElement, pDescri : HTMLTextAreaElement){
      let pObj : Iproducts = {
        productName : pname.value,
        pDescription : pDescri.value,
        pCategory : "Product"
      }
      this.productArray.push(pObj);
      pname.value = ''
      pDescri.value = ''
  }

  onAddCatlog(pname : HTMLInputElement, pDescri : HTMLTextAreaElement){
    let obj : Iproducts = {
      productName : pname.value,
      pDescription : pDescri.value,
      pCategory : "Catlog"
    }
    this.productArray.push(obj);
    pname.value = ''
    pDescri.value = ''

  }

  onAddProductDetails(pname : HTMLInputElement, pDescri : HTMLTextAreaElement, catg : IproductCatg){
    let obj : Iproducts = {
        productName : pname.value,
        pDescription : pDescri.value,
        pCategory : catg
    }
    console.log(obj);
    this.productArray.push(obj);
    pname.value = ''
    pDescri.value = ''
  }
}
