import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { KafeinComponent } from './kafein/kafein.component';
import { RouterModule, Routes } from '@angular/router' // ilk olarak import işlemi yapılır.
import { CartComponent } from './cart/cart.component';

const routes : Routes =[
{
    //gelen path products olursa component olarak product componenti aç komutunu veririz
    path:"products",component:ProductComponent 
},
{
    //hiç bişey yazılmassa anasayfa açılsın anasayfa örnek olarak product component seçildi
    path:"",redirectTo:"products",pathMatch:"full" 
},
{
    // gelen path cart(spete at ise) cart componenti aç
    path:"List",component:CartComponent 
}
    
]
@NgModule({
   declarations: [
      AppComponent,
      ExampleComponent,
      ProductComponent,
      CategoryComponent,
      KafeinComponent,
      CartComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes) //gideceği root adresi forroot ile veriyoruz
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
