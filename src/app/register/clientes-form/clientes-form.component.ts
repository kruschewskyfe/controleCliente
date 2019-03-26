import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { NewClient } from "./new-client";
import { CadastrarService } from "./cadastrar.service";

@Component({
  selector: "app-clientes-form",
  templateUrl: "./clientes-form.component.html",
  styleUrls: ["./clientes-form.component.css"]
})
export class ClientesFormComponent implements OnInit {
  cadastrarForm: FormGroup;
  dataAtual = new Date();
  sorteados = [];
  valorMaximo = 1000;

  constructor(
    private formBuilder: FormBuilder,
    private cadastrarService: CadastrarService
  ) {}

  ngOnInit(): void {
    this.cadastrarForm = this.formBuilder.group({
      id: [],
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
          Validators.minLength(11),
          Validators.maxLength(11)
        ]
      ],
      dataNascimento: ["", Validators.required],
      idade: [],
      profissao: ["", Validators.required]
    });
  }

  date_diff_indays = function(date1, date2) {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24) /
        365
    );
  };

  criarUnico() {
    let sugestao = Math.ceil(Math.random() * this.valorMaximo);
    while (this.sorteados.indexOf(sugestao) >= 0) {
      sugestao = Math.ceil(Math.random() * this.valorMaximo);
    }
    this.sorteados.push(sugestao);
    return sugestao;
  }

  cadastrarCliente() {
    const novoC: NewClient = {
      id: this.criarUnico(),
      nome: this.cadastrarForm.value.nome,
      sobrenome: this.cadastrarForm.value.sobrenome,
      cpf: this.cadastrarForm.value.cpf,
      dataNascimento: this.cadastrarForm.value.dataNascimento,
      idade: this.date_diff_indays(
        this.cadastrarForm.value.dataNascimento,
        this.dataAtual
      ),
      profissao: this.cadastrarForm.value.profissao
    };

    //const novoCliente = this.cadastrarForm.getRawValue() as NewClient;
    this.cadastrarService
      .cadastrarCliente(novoC)
      .subscribe(
        () => alert("Cadastrado com sucesso"),
        err => console.log(err)
      );

    this.cadastrarForm.reset();
  }
}
