import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

import { ClienteService } from "./cliente.service";
import { Cliente } from "./cliente";

@Injectable({ providedIn: "root" })
export class ClientesListaResolver implements Resolve<Observable<Cliente[]>> {
  constructor(private service: ClienteService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Cliente[]> {
    const cliente = route.params.clientes;
    return this.service.listar();
  }
}
