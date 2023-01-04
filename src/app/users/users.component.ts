import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { UtilisateursService } from '../services/utilisateurs.service';
@Component({ 
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  is:number | undefined ;  
  public userInfor: string[] = []; 
  public userList: any[] = []; 

  constructor(private router:Router ,
              private userService:UtilisateursService ) { }

  ngOnInit(): void { 
    this.getUser();  
    
} 
  goToCreation() {  
    this.router.navigate(["/creationUser"])
  } 
   getUser () { 
    this.userService.getUserFrom().subscribe( 
      result =>  { 
        this.userList= result ; 
         } 
  )}   
   }
