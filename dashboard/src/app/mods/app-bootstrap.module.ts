import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//BOOTSTRAP
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot()
  ],
  exports: [ModalModule, TooltipModule, AccordionModule]
})

export class AppBootstrapModule {}
