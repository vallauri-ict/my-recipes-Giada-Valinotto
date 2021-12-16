import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//servizio dedito alle chiamate http

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private REST_API_SERVER = "http://localhost:3000/"

  constructor(public httpClient:HttpClient) { }

  public sendGetRequest(endpoint:string){
    return this.httpClient.get(this.REST_API_SERVER+endpoint);
  }
}
