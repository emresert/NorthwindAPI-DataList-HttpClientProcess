import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
// Observable oluşturabilmek için Oobservable import edilir
import { Observable } from 'rxjs/internal/Observable'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    title = "Products";
    // Prodcut dizinine liste şeklinde verileri atmak için observable oluşturuldu.
    products:Product[]; // xml formatında bu şekilde olacak 
    //products:Observable<Product[]>;  api servislerde kodumuz bu şekilde observable olacak
    constructor(private http: HttpClient) { }

    // Uygulama açıldığında yapılacaklar bu metodun içine yazılır.
  ngOnInit() {
    this.getProducts();
  }
  //tabloya verileri çekmek için metod yazılır
  getProducts(){
    // Angularda metodun dışındaki bir nesneye erişmek için this keywordundan yararlanılır.getten sonra <> içine yazdımız tip ilede
    // gelen datayı istediğimiz veri tipine dönüştür komutunu veriyoruz.Daha sonra apiyi çektiğimiz url 
    // girerek verinin çekileceği adres girilir.
    // this.products = this.http.get<Product[]>('http://northwindapi.azurewebsites.net/api/products'); api servislerdeki kodumuz
    this.http.get<Product[]>('http://northwindapi.azurewebsites.net/api/products').subscribe(res=>{this.products=res}); // xml formatındaki kodumuz bu şekilde
  } 
}
