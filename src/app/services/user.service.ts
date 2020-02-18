import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.URL_API + 'getAllUsers');
  }

  deleteUser(id: string) {
    return this.http.delete(this.URL_API + 'delete/' + id);
  }

}
