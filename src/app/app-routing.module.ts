import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {ListColaboradoresComponent} from "./list-colaboradores/list-colaboradores.component";

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'colaboradores', component: ListColaboradoresComponent},
  {path: '**', component: ListColaboradoresComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
