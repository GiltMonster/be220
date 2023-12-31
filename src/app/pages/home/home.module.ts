import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


import { HeaderComponent } from "../../components/header/header.component";
import { ProgramasComponent } from "../../components/programas/programas.component";
import { PerfilComponent } from "../../components/perfil/perfil.component";
import { PersonalComponent } from "../../components/personal/personal.component";
import { ConteudoComponent } from "../../components/conteudo/conteudo.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, HeaderComponent, ProgramasComponent, PerfilComponent, PersonalComponent, ConteudoComponent]
})
export class HomePageModule {}
