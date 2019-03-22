import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientesListaComponent } from "./clientes-lista/clientes-lista.component";
import { HeaderModule } from "../shared/header/header.module";

@NgModule({
  declarations: [ClientesListaComponent],
  imports: [CommonModule, HeaderModule]
})
export class ClientesListaModule {}
