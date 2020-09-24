import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @Input() listaDeTarefasInput: Array<any>;
  @Output() removerTarefaOutput: EventEmitter<number> = new EventEmitter<number>();
  @Output() adicionarTarefaOutput: EventEmitter<any> = new EventEmitter<any>();

  listaDeTarefas: any[] =[];

  postForm: FormGroup=new FormGroup({
    task: new FormControl("", [Validators.required]),
    date: new FormControl("", [Validators.required]),
    contato: new FormControl("", [Validators.required])
  })

  constructor(private listaService: ServiceService) { }

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
