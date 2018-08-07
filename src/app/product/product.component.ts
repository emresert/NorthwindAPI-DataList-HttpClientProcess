import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
// Oluşturduğumuz servisi kullanmak için buraya import etmemiz gerekir.
import { ProductService } from "./product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [ProductService] //local kullanılan servislerde bu şekilde tanımlanır
})
export class ProductComponent implements OnInit {
  title = "Products";
  products: Product[]; 
  
  //constructer içinde sadece servisi kullanıcağımız için  servisden'den kalıtılmış bir  nesne oluşturduk
  // ve inject ettik
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }
  //servisde oluşturulan method burada çağırıldı
  getProducts() {
    //Product servisdeki getProducts ' a subscribe ol ve dönen sonuca mapping işlemini yap
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    });
  }
}
