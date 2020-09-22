import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from './service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() listaDeTarefasInput: Array<any>;
  @Output() removerTarefaOutput: EventEmitter<number> = new EventEmitter<number>();
  @Output() adicionarTarefaOutput: EventEmitter<any> = new EventEmitter<any>();

  listaDeTarefas: any[] =[];

  postForm: FormGroup=new FormGroup({
        task: new FormControl("digita uma nova tarefa", [Validators.required]),
        date: new FormControl("20/10/2020", [Validators.required])
  })

  constructor(private listaService: ServiceService) {}

  ngOnInit(): void {
    this.listaDeTarefas = this.listaService.listaDeTarefas;
  }

  removerTarefa(posicao: number): void {
    this.listaDeTarefas.splice(posicao, 1);
  }
 
  submit(): void {
    console.log(this.postForm.value);
    if (this.postForm.valid) {
      this.listaService.adicionarTarefa(this.postForm.value);
      this.postForm.reset();
    }
  }

}
