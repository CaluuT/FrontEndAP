import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/Persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
persona: persona = null;

constructor(private personaService: PersonaService, private tokenService: TokenService){}

  isLogged = false;

 ngOnInit(): void{
  this.cargarPersona();
  if(this.tokenService.getToken()){
    this.isLogged = true;
  } else{
    this.isLogged = false;
  }
 }

 cargarPersona(){
  this.personaService.detail(1).subscribe(
    data =>{
      this.persona = data;
    }
  )
 }
}
