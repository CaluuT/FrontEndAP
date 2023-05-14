import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  isLogged = false;

   constructor(private router:Router, private tokenService: TokenService) {
    
   }
   ngOnInit(): void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
   }
   
   onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
   }

   login(){
    this.router.navigate(['/login'])
   }
}
