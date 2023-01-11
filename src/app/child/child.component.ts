import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { EmployeeData } from './employee.model';

@Component({
  selector: 'child',
  templateUrl: 'child.component.html',
})
export class ChildComponent implements OnInit {
  Data: EmployeeData[] = [];
  name: string;
  @Input('employeeName') employeeName: any;
  @Output() toParent = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    //console.log('name **', this.employeeName);
  }
  ngOnChanges(changes: {[property: string]: SimpleChange })
  {
      
      let employeeName = changes['employeeName'].currentValue 

      let employee = this.DATA.filter(data => {
      let employeeName = changes['employeeName'].currentValue 
         if(data['name']==employeeName){
           return true
         }
       } )
       console.log('**',employee)
       this.toParent.emit(employee)
  }
  toparent() {
    this.toParent.emit(this.name);
  }

  DATA = [
    new EmployeeData('yasine', 'elbrihi', 40),
    new EmployeeData('charifa', 'amraoui', 60),
    new EmployeeData('hind', 'elbrihi', 27),
  ];
}
