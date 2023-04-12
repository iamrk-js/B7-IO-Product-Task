import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IproductCatg, Iproducts } from '../../model/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output() addProducts: EventEmitter<Iproducts> = new EventEmitter<Iproducts>()
  constructor() { }

  ngOnInit(): void {
  }
  addItem(pname: HTMLInputElement, pdesc: HTMLTextAreaElement, catg: IproductCatg) {
    let obj: Iproducts = {
      productName: pname.value,
      pDescription: pdesc.value,
      pCategory: catg
    }
    // console.log(obj)
    pname.value = ''
    pdesc.value = ''
    this.addProducts.emit(obj)
  }
}
