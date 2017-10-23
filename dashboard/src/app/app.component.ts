import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApplicationsService } from './services/applications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApplicationsService]
})
export class AppComponent {
  
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
