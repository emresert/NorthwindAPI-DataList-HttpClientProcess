import { Component, OnInit } from '@angular/core';
import { Kafein } from './kafein';
import { KafeinService } from './kafein.service';

@Component({
  selector: 'app-kafein',
  templateUrl: './kafein.component.html',
  styleUrls: ['./kafein.component.css'],
  providers: [KafeinService]
})
export class KafeinComponent implements OnInit {
  title = "Kafein";
  //kafein:Observable<Kafein[]>;
  kafein:Kafein[];
  constructor(private kafeinService: KafeinService) { }

  ngOnInit() {
    this.getProducts();
  }
  // Autantication yetki işlemleri için bu adımı yaptık
 
  getProducts() {
    //Product servisdeki getProducts ' a subscribe ol ve dönen sonuca mapping işlemini yap
    this.kafeinService.getProducts().subscribe(res => {
      this.kafein = res;
     
    });
  }

}
