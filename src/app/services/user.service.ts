import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../modules/User";
import { Results } from '../modules/results';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<Results> {
    const URL_API = "https://randomuser.me/api/";
    return this.http.get<Results>(URL_API);
  }

}
