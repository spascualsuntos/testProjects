import { Component, OnInit } from '@angular/core';
import { Application } from './../../interfaces/applications';
import { ApplicationsService } from './../../services/applications.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  targetApplication : Application[] = [];

  constructor(private applicationsService : ApplicationsService) { }

  ngOnInit() {
    this.targetApplication = this.applicationsService.getAll();
  }

}
