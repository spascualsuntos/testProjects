import { Injectable } from '@angular/core';
import { Applications } from './intefaces/applications';

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
