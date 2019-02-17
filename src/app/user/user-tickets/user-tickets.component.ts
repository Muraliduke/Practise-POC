import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'app-user-tickets',
  templateUrl: './user-tickets.component.html',
  styleUrls: ['./user-tickets.component.scss']
})
export class UserTicketsComponent implements OnInit {
  columnDefs: any;
  rowData ;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUserTickets().subscribe(data => this.rowData = data);
    this.columnDefs = [
      {
        headerName: 'S.No',
        field: 'sno',
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Ticket No',
        field: 'ticketno',
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Title',
         field: 'title',
         cellClass: 'cell-wrap-text',
         autoHeight: true
      },
      {
        headerName: 'Description',
        field: 'description',
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Priority',
        field: 'priority',
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Phone',
        field: 'phone',
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
         headerName: 'Date',
         field: 'date' ,
         cellClass: 'cell-wrap-text',
         autoHeight: true
        },
      {
        headerName: 'Status',
        field: 'status' ,
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Action',
        field: 'action' ,
        cellClass: 'cell-wrap-text',
        autoHeight: true
      }
    ];
  }


}
