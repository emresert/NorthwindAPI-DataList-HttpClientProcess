import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import {HttpClientModule} from '@angular/common/http'; // eklendi
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { KafeinComponent } from './kafein/kafein.component';

@NgModule({
   declarations: [
      AppComponent,
      ExampleComponent,
      ProductComponent,
      CategoryComponent,
      KafeinComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
