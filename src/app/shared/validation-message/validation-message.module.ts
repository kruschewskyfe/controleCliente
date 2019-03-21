import { NgModule } from "@angular/core";
import { ValidationMessageComponent } from "./validation-message.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ValidationMessageComponent],
  imports: [CommonModule],
  exports: [ValidationMessageComponent]
})
export class ValidationMessageModule {}
