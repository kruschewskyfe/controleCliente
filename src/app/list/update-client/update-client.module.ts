import { NgModule } from "@angular/core";
import { UpdateClientComponent } from "./update-client.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValidationMessageModule } from "src/app/shared/validation-message/validation-message.module";

@NgModule({
  declarations: [UpdateClientComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ValidationMessageModule,
    ReactiveFormsModule
  ],
  exports: [UpdateClientComponent]
})
export class UpdateClientModule {}
