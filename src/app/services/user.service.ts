import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public data: any;

  constructor(private http: HttpClient) { }

  // MAPEAR OS DADOS DA API CRIANDO UMA INTERFACE DEPOIS, POR ENQUANTO FICA ANY
  getUser(): Observable<any>{
    const URL_API = "https://randomuser.me/api/";
    return this.http.get<any>(URL_API)
  }


}
