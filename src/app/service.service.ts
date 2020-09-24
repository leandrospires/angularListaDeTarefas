import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _listaDeTarefas = [
    {"task":"Criar Formulário", "date": '20082020', "contato": "11988881111"},
    {"task":"Listar tarefas", "date": '21092021', "contato": "11988882222"},
    {"task":"Incluir tarefa", "date": '22102022', "contato": "11988883333"},
    {"task":"Remover tarefa", "date": '23112023', "contato": "11988884444"}
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
