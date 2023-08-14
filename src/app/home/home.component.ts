import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

@ViewChild('dynamic') login: ElementRef;

  list: any;
  ngOnInit(): void {
  let values= (localStorage.getItem('studentData'));
  this.list= values && JSON.parse(values);
  console.log(this.list)
  }
  ngAfterViewInit(): void {


  }
  constructor(){

  }

  sum1(){
  // console.log(this.logins?.sum(10,21))

  }

}
