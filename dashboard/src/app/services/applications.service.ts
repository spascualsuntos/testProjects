import { Injectable } from '@angular/core';
import { Application } from './../interfaces/applications';

let APPLICATIONS : Application[] = [
  {id: 1, name: 'Application uno'}
];

@Injectable()
export class ApplicationsService {

  constructor() { }

  getAll(): Application[] {
    return APPLICATIONS;
  }

}
