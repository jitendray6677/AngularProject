import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationDTO } from '../model/signup.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  urls='http://localhost:444/registration';
  constructor(private httpClient: HttpClient) { }

  public findAll(){
    return this.httpClient.get(this.urls);
  }
  public  create(registrationDTO: RegistrationDTO){
    return this.httpClient.post(this.urls,registrationDTO);
  }
  // public  deleteData(id: number){
  //   return this.httpClient.delete(this.urls+'/'+id);
  // }
  public  deleteData(id: number){
    return this.httpClient.post(this.urls+'/id?id='+id,{});
  }
}
