import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { ClienteService } from "../clientes-lista/cliente.service";
import { UpClient } from "./upClient";
import { Subscription } from "rxjs";
import { Cliente } from "../clientes-lista/cliente";
import * as moment from "moment";

@Component({
  selector: "app-update-client",
  templateUrl: "./update-client.component.html",
  styleUrls: ["./update-client.component.css"]
})
export class UpdateClientComponent implements OnInit {
  idAtual: number;
  inscricao: Subscription;
  atualizarForm: FormGroup;
  dataAtual = new Date();
  clientes: Cliente[];

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.idAtual = params["id"];
    });

    this.consultarPorId(this.idAtual);

    this.atualizarForm = this.formBuilder.group({
      id: [{ value: "", disabled: true }, Validators.required],
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

  atualizarCliente() {
    const attCliente: UpClient = {
      id: this.idAtual,
      nome: this.atualizarForm.value.nome,
      sobrenome: this.atualizarForm.value.sobrenome,
      cpf: this.atualizarForm.value.cpf,
      dataNascimento: this.atualizarForm.value.dataNascimento,
      idade: this.date_diff_indays(
        this.atualizarForm.value.dataNascimento,
        this.dataAtual
      ),
      profissao: this.atualizarForm.value.profissao
    };

    this.clienteService.atualizarCliente(attCliente).subscribe(
      () => {
        alert("Atualizado com sucesso");
        this.router.navigate(["/ConsultarCliente"]);
      },
      err => console.log(err)
    );
  }

  consultarPorId(id) {
    this.clienteService.consultarPorId(id).subscribe(dados => {
      this.populaForm(dados);
    });
  }

  populaForm(dados) {
    this.atualizarForm.setValue({
      id: dados.Id,
      nome: dados.Nome,
      sobrenome: dados.Sobrenome,
      cpf: dados.Cpf,
      dataNascimento: dados.DataNascimento.slice(
        0,
        "1992-11-01T00:00:00".indexOf("T")
      ),
      idade: dados.Idade,
      profissao: dados.Profissao
    });
  }
}
