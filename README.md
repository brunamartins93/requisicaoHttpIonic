# requisicaoHttpIonic
[IONIC 4 - REQUISICAO HTTP]

PARA GERAÇÃO DE UM SERVICE USAR O COMANDO ABAIXO:
  ionic g service services/meuservice
  
PARA UTILIZAR O MÓDULO HTTP NÃO ESQUECER DE IMPORTAR NO app.module.ts

import { HttpClientModule } from '@angular/common/http';
imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
