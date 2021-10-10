import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categories: Category[] = [];
  categoryForm = new FormGroup({
    name: new FormControl(''),

  });

  constructor(private categoryService: CategoryService) {

  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

  ngOnInit(): void {
    console.log(this.getCategories())

  }

  submitCategory() {
    if (!this.categoryForm.valid) {
      alert(this.categoryForm.errors)
    }
    this.categoryService.addCategory(this.categoryForm.get('name')?.value)
      .subscribe(res => {
          console.log(res)
          this.closePopup();
        },
        error => {
          alert(error.message)
        })
  }

  async getCategories() {
    return this.categoryService.getCategories()
      .subscribe(res => {
          this.categories = res;
          console.log(this.categories)
          console.log('Response from the server', res)
        },
        err => {
          console.log(err)
        })
  }
}
