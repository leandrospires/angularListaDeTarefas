import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _listaDeTarefas = [
    {"task":"Criar Formulário", "date": '20/09/2020'},
    {"task":"Listar tarefas", "date": '21/09/2020'},
    {"task":"Incluir tarefa", "date": '22/09/2020'},
    {"task":"Remover tarefa", "date": '23/09/2020'}
  ];

  constructor() { }

  public get listaDeTarefas(): Array<any> {
    return this._listaDeTarefas;
  }

  removerTarefa(posicao: number): void{
    this.listaDeTarefas.splice(posicao, 1);
  }

  adicionarTarefa(tarefa: any): void {
    this.listaDeTarefas.push(tarefa);
  }
}
