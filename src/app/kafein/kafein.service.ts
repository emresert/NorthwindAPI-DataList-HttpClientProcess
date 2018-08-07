import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from  '@angular/common/http';
import { Kafein } from './kafein';
import { Observable } from "rxjs/internal/Observable";

@Injectable(/*{providedIn: 'root'}*/)
export class KafeinService {
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization':'bearer 5a8ff1cf-8135-47e8-b5ff-45b6cc823973',// TOKEN Burada yer alacak
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'*',
      'Access-Control-Allow-Headers':'*'
    }),
    withCredentials: false
  };

constructor(private http: HttpClient) { }
getProducts(): Observable<Kafein[]>{
  
  return this.http.get<Kafein[]>(
    //'http://192.168.38.46:8081/api/banks',this.httpOptions
    //localhosttan apiyi  çektik
    'http://localhost:4200/assets/dosya.json',this.httpOptions
  );
}

}
