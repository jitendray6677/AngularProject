import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeserviceService {

  constructor(private httpClient : HttpClient) { }

  urls = 'https://jsonplaceholder.typicode.com/posts';

  public findTeams(){
    return this.httpClient.get(this.urls);
  }
}
