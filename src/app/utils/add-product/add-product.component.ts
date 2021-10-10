import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories: Category[] = []
  images: any = []

  productForm = new FormGroup(
    {
      name: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl(''),
      shortDesc: new FormControl(''),
      longDesc: new FormControl(''),
      category: new FormControl('')
    }
  )

  constructor(private categoryService: CategoryService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getCategories()
    console.log(this.images)
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(res => {
          this.categories = res
        },
        error => {
          console.log(error)
        })
  }

  addProduct() {


    let productName=this.productForm.get('name')?.value;
    let productPrice=this.productForm.get('price')?.value;
    let productCategory=this.productForm.get('category')?.value
    let quantity=this.productForm.get('quantity')?.value
    let shortDesc=this.productForm.get('shortDesc')?.value
    let longDesc=this.productForm.get('longDesc')?.value

    let product:Product={
      name:productName,
      price:productPrice,
      category:productCategory,
      quantity:quantity,
      shortDescription:shortDesc,
      longDescription:longDesc,
      images:[]
    }

    this.productService.addProduct(product)
      .subscribe(response=>{
        console.log(response)
      },error => {
        console.log(error)
      })
  }

}
