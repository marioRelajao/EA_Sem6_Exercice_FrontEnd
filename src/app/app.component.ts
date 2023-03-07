import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular CRUD';

  employees = [
    {name: 'Fazt', position: 'manager', email: 'a@a.com'},
    {name: 'Isaac', position: 'Designer', email: 'b@b.com'},
    {name: 'Maria', position: 'Programer', email: 'c@c.com'},
  ];

  model:any = {};
  model2:any = {};
  msg:string = '';
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.model = {};
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
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void{
    let i = this.myValue;
    for(let j=0; j < this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = 'Record is successfully Updated';
      }
    }
    this.hideUpdate = true;
  }

  closeAlert():void{
    this.msg = '';
  }

}
