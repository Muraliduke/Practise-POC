import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTicketsComponent } from './user-tickets/user-tickets.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserHomeRoutingModule } from './user-routing.module';
import { AgGridModule } from 'ag-grid-angular';

// MDB Angular Free
import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserTicketsComponent, UserHomeComponent, CreateTicketComponent],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    AgGridModule.withComponents([]),
    ModalModule, WavesModule, InputsModule, ButtonsModule,
    FormsModule, ReactiveFormsModule
  ],
  entryComponents: [ CreateTicketComponent ]
})
export class UserModule { }
