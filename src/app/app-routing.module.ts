import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PerfilComponent} from "./perfil/perfil.component";
import {ListColaboradoresComponent} from "./list-colaboradores/list-colaboradores.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'colaboradores', component: ListColaboradoresComponent},
  {path: 'perfil/:id', component: PerfilComponent},
  { path: '**', redirectTo: 'colaboradores', pathMatch: 'full' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
