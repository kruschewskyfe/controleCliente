import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-clientes-form",
  templateUrl: "./clientes-form.component.html"
})
export class ClientesFormComponent implements OnInit {
  cadastrarForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cadastrarForm = this.formBuilder.group({
      nome: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(30)]
      ],
      sobrenome: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ]
      ],
      cpf: [
        "",
        [
          Validators.required,
          Validators.pattern("[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"),
          Validators.maxLength(11)
        ]
      ],
      dataNascimento: [""],
      profissao: [""]
    });
  }
}
