import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PerfilComponent} from "./perfil/perfil.component";
import {ListColaboradoresComponent} from "./list-colaboradores/list-colaboradores.component";

const routes: Routes = [
  {path: '', redirectTo: 'colaboradores', pathMatch: 'full'},
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
