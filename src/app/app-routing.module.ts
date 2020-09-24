import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'lista', component:HomeComponent},
  {path:'tarefas', component:TarefasComponent},
  {path:'about', component:AboutComponent},
  
  //ativa lazy loaden (não é carregado no browser, mas se ir para página, será importado)
  //{path:'about', loadChildren:()=>import('./about/about.module').then(m=>m.AboutModule)},
  {path:'**', component: NotFoundComponent }
   
];

//{path: 'about', component:AboutComponent},

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
