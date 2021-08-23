import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Actividad } from '../models/actividad';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpCrmService {

  constructor(private _http: HttpClient) {

  }
  listarActividadesProgramadoPorProspecto(id: string) {
    return this._http.get<Actividad[]>(environment.baseUrl + 'index.php', {
      params: {
        entryPoint: 'PipelineEntryPoint',
        action: 'listar_act_programado_prospecto',
        len: 1,
        param1: id
      }
    });
  }
}
