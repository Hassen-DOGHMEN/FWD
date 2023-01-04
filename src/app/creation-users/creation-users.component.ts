import { Component, OnInit } from '@angular/core'; 
import { UtilisateursService } from '../services/utilisateurs.service';
import { Router } from '@angular/router'; 
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms'; 
import { User } from '../models/user';
@Component({
  selector: 'app-creation-users',
  templateUrl: './creation-users.component.html',
  styleUrls: ['./creation-users.component.scss']
})
export class CreationUsersComponent implements OnInit {
public users: User;   
selected:string='';
roles = ['Client','Manager','Ingénieur','RH','Consultant'];
  constructor( private creationUser:UtilisateursService ,
    private router:Router) {  
    this.users=new User();}
  ngOnInit(): void {
  }  
iscreated:boolean = false ; 
 creerUser(form:NgForm){   
  this.creationUser.registreUser([this.users.nomC,this.users.email,this.users.motDePasse,this.users.matricule,this.users.number,this.selected]).subscribe( 
    res => {  
      if (res == "Failure") {  
        alert('Creation echoué')
        this.iscreated=false; } 
      else { 
        this.iscreated=true;  
        alert('Utilisateur a été créé avec succès !')  
        this.router.navigate (["/user"]) }
 });} 
 selectedRole(e:any) {  
  this.selected=e.target.value; }
}
