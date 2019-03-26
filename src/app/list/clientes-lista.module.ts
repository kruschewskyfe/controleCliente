import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientesListaComponent } from "./clientes-lista/clientes-lista.component";
import { HeaderModule } from "../shared/header/header.module";
import { UpdateClientModule } from "./update-client/update-client.module";
import { ClienteDetalheComponent } from "./clientes-lista/cliente-detalhe/cliente-detalhe.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ClientesListaComponent, ClienteDetalheComponent],
  imports: [
    CommonModule,
    HeaderModule,
    UpdateClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientesListaModule {}
