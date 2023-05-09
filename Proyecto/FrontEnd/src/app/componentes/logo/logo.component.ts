import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
 
   constructor(private router:Router){}

   login(){
    this.router.navigate(['/login'])
   }
}
