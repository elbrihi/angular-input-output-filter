import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeData {
  constructor(private name: string, private prenom: string, age: number) {}
}
