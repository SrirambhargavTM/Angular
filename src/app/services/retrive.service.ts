import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RetriveService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get("http://localhost:1234/all")
  }
}
