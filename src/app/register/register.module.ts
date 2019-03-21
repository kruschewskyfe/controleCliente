import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ClientesFormComponent } from "./clientes-form/clientes-form.component";
import { CommonModule } from "@angular/common";
import { ValidationMessageModule } from "../shared/validation-message/validation-message.module";

@NgModule({
  declarations: [ClientesFormComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ValidationMessageModule
  ]
})
export class RegisterModule {}
