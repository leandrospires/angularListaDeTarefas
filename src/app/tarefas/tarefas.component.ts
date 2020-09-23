import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  @Input() listaDeTarefasInput: Array<any>;

  listaDeTarefas: any[] =[];
  listaDeTarefasDone: any[] =[];

  constructor(private listaService: ServiceService) { }

  ngOnInit(): void {
    this.listaDeTarefas = this.listaService.listaDeTarefas;
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
