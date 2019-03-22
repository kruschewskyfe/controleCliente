import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ClientesListaComponent } from "./list/clientes-lista/clientes-lista.component";
import { ClientesFormComponent } from "./register/clientes-form/clientes-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { ClientesListaResolver } from "./list/clientes-lista/clientes-lista.resolver";

const rotas: Routes = [
  { path: "", component: ClientesFormComponent },
  {
    path: "ConsultarCliente",
    component: ClientesListaComponent,
    resolve: { clientes: ClientesListaResolver }
  },
  { path: "CadastrarCliente", component: ClientesFormComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
