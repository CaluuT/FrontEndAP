import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewSkillsComponent } from './componentes/hard-soft-skills/new-skills.component';
import { EditSkillsComponent } from './componentes/hard-soft-skills/edit-skills.component';
import { EditaboutMeComponent } from './componentes/about-me/editabout-me.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos.component';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'nuevaskill', component: NewSkillsComponent},
  {path: 'editskill/:id', component: EditSkillsComponent},
  {path: 'nuevaskill', component: NewSkillsComponent},
  {path: 'editarperfil/:id', component: EditaboutMeComponent},
  {path: 'nuevoproyecto', component: NewProyectosComponent},
  {path: 'editproyectos/:id', component: EditProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
