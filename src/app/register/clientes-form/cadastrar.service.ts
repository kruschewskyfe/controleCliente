import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewClient } from "./new-client";

const API = "http://localhost:49999";

@Injectable({ providedIn: "root" })
export class CadastrarService {
  constructor(private http: HttpClient) {}

  cadastrarCliente(novoCliente: NewClient) {
    return this.http.post(API + "/api/cliente/CadastrarCliente", novoCliente);
  }
}
