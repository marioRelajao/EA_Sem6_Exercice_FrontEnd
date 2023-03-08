import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';

interface Employee {
  name: string;
  position: string;
  office: string;
  salary: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.obtenerEmployees();
  }

  obtenerEmployees(){
    this._employeeService.getEmployees().subscribe(data => {
      console.log(data);
      for(let i=0; i < data.length; i++){
        this.employees.push(data[i]);
      }
    }, error => {
      console.log(error);
    })
  }

  title:string = 'Angular CRUD';  

  employees: Employee [] = [];

  model:Employee = {name:'',position:'',office:'',salary:0};
  model2:Employee = {name:'',position:'',office:'',salary:0};
  msg:string = '';
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.model = {name:'',position:'',office:'',salary:0};
    this.msg = 'Record is successfuly Added';
  }

  deleteEmployee(i:number):void{
    var answer = confirm('Estas seguro de querer eliminarlo?');
    if(answer){
      this.employees.splice(i, 1);
      this.msg = 'Record is successfully Delete';
    }    
  }

  myValue = 0;
  editEmployee(i:number):void{
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.office = this.employees[i].office;
    this.myValue = i;
  }

  updateEmployee():void{
    let i = this.myValue;
    for(let j=0; j < this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.model2 = {name:'',position:'',office:'',salary:0};
        this.msg = 'Record is successfully Updated';
      }
    }
    this.hideUpdate = true;
  }

  closeAlert():void{
    this.msg = '';
  }

}
