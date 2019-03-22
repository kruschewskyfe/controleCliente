import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ClientesFormComponent } from "./clientes-form/clientes-form.component";
import { CommonModule } from "@angular/common";
import { ValidationMessageModule } from "../shared/validation-message/validation-message.module";
import { HeaderModule } from "../shared/header/header.module";

@NgModule({
  declarations: [ClientesFormComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ValidationMessageModule,
    HeaderModule
  ]
})
export class RegisterModule {}
