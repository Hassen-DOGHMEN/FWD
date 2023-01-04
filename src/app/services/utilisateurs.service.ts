import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
 
  readonly urlAPI = "https://localhost:44372/api/Users/";
  constructor(private  http: HttpClient) {  } 

  public getUserFrom(){ 
    let mydata =this.http.get <any> (this.urlAPI+"GetAllUsers"); 
    return mydata ; 
  } 
  public registreUser( loginInfo:Array<String>) { 
    return this.http.post(this.urlAPI+"Register", 
    {  
   UserName: loginInfo[0],  
   Email:loginInfo [1],
   Password: loginInfo[2] , 
   Matricule:loginInfo[3], 
   PhoneNumber:loginInfo[4], 
   Role:loginInfo[5], 
   })
  } 
 updateUser(id:number|string, data:any) {
    return this.http.put(this.urlAPI+ `UpdateUserById/${id}`, data);
  }
 deleteUser(matricule:string) {
    return this.http.delete(this.urlAPI + `DeleteUserById/${matricule}`);
  }
}
