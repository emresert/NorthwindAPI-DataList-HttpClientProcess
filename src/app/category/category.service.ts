import { Injectable } from "@angular/core";
//Client işlemi bu servisde yapılacağı için client ve observable buraya import edildi
import { HttpClient } from "@angular/common/http";
import { Category } from "./category";
import { Observable } from "rxjs/internal/Observable";

@Injectable(
  /*{
  providedIn: 'root' // angular 5 de provideIn yok
  }*/
)

export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
   
    return this.http.get<Category[]>(
      "http://northwindapi.azurewebsites.net/api/categories"
    );
  }
}
