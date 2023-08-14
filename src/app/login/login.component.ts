import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  localStorage.setItem('studentData',  JSON.stringify(this.studentData));
  }
  result: any;
  @Input() itemData='';
@Output() select = new EventEmitter<string>();
  studentData=[{
    id:1, name:'arya',email:'arya@gmail.com'
  },
{
  id:2, name:'arjun', email:'arjun@gmail.com'
},{
  id:3, name:'pawan', email:'pawan@gmail.com'
}];

public tested(event: string){
  this.select.emit(event);

}
public sum(num1:number, num2: number){
    this.result= num1+num2
}

}
