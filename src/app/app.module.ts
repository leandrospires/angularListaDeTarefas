import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContatoPipe } from './contato.pipe';
import { TelefoneDirective } from './telefone.directive';
import { DataPipe } from './data.pipe';
import { DataDirective } from './data.directive'

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    HomeComponent,
    NotFoundComponent,
    ContatoPipe,
    TelefoneDirective,
    DataPipe,
    DataDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
