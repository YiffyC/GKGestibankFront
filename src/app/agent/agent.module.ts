import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AttachedClientsComponent } from './attached-clients/attached-clients.component';

@NgModule({
  imports: [
    CommonModule,
    AgentRoutingModule
  ],
  declarations: [AttachedClientsComponent]
})
export class AgentModule { }
