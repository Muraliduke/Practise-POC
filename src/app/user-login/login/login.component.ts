import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  modalRef: MDBModalRef;
  modalOptions = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: 'modal-lg',
    containerClass: '',
    animated: true,
    data: {
        heading: 'New User Registration',
        content: { heading: 'Content heading', description: 'Content description'}
    }
  };

  constructor(private modalService: MDBModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(RegisterComponent, this.modalOptions);
  }

  ngOnInit() {
  }

}
