import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import {HttpClientModule} from '@angular/common/http'; // eklendi
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
   declarations: [
      AppComponent,
      ExampleComponent,
      ProductComponent,
      CategoryComponent
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
