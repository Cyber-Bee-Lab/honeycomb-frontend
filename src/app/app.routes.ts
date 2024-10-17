import { Routes } from '@angular/router';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';
import { TelaDeCadastroComponent } from './tela-de-cadastro/tela-de-cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TelaDeUsuarioComponent } from './tela-de-usuario/tela-de-usuario.component';

export const routes: Routes = [{path:"",component:TelaDeLoginComponent },{path:"Cadastro",component:TelaDeCadastroComponent},{path:"Perfil",component:PerfilComponent},{path:"Usuario",component:TelaDeUsuarioComponent}];

