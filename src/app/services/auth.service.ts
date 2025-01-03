import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  fetchUser(): Observable<User> {
    const jsonUrl = 'assets/data/user.json';
    return this.http.get<User>(jsonUrl);
  }
}
