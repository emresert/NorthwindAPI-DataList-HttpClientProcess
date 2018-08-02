import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kafein } from './kafein';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-kafein',
  templateUrl: './kafein.component.html',
  styleUrls: ['./kafein.component.css']
})
export class KafeinComponent implements OnInit {
  title = "Kafein";
  //kafein:Observable<Kafein[]>;
  kafein:Kafein[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }
  // Autant,ca,on yetki işlemleri için bu adımı yaptık
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization':'bearer exampletoken',// TOKEN 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'*',
      'Access-Control-Allow-Headers':'*'
    }),
    withCredentials: false
  };

  getProducts(){
    
   //this.kafein = this.http.get<Kafein[]>('');
   this.http.get<Kafein[]>('exampleurl',this.httpOptions).subscribe(res=>{this.kafein=res});
   
  } 

}
