import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  title = "Categories";
  categories: Category[]; 
  
  //constructer içinde sadece servisi kullanıcağımız için  servisden'den kalıtılmış bir  nesne oluşturduk
  // ve inject ettik
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getCategories();
  }
  //servisde oluşturulan method burada çağırıldı
  getCategories() {
  
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    });
  }
}