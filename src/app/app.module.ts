import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ClienteService } from "./list/clientes-lista/cliente.service";
import { AppRoutingModule } from "./app.routing.module";
import { ErrorsModule } from "./errors/errors.module";
import { ClientesListaModule } from "./list/clientes-lista.module";
import { RegisterModule } from "./register/register.module";
import { HeaderModule } from "./shared/header/header.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClientesListaModule,
    AppRoutingModule,
    ErrorsModule,
    RegisterModule,
    HeaderModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
