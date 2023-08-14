import { Component, Inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeserviceService } from '../service/fakeservice.service';
import { RegistrationService } from '../service/registration.service';
import { RegistrationDTO } from '../model/signup.model';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],


})
export class SignupComponent  implements OnInit{
  mapTypeData={"1" : [{id: 1, name: 'jitendra', email: "jit@gmail.com"}],
         "2": [{id: 2, name: 'vishal'},{id: 2, name: 'vivek'}],"3": [{id:3,name:'ravi'},{id:3,name:'ravi'}]};

  constructor( public dialog: MatDialog,
    public dialogRef: MatDialogRef<any>,
    private  router: Router, private fakeserviceService: FakeserviceService, private registrationService:RegistrationService ,
    private activatedRoute: ActivatedRoute){
  }
  itemList:any[] = []
  listData=[{id:1, name:'jitendra',email:'jitend@gmail.com'},{id:2, name:'sachin',email:'sachin@gmail.com'}
       ,{id:3,name:'vivek',email:'vivek@gmail.com'}];

  registrationDTO: RegistrationDTO =new RegistrationDTO();
  ngOnInit(): void {
            //  this.mapTypeData[2].forEach((res)=>{
            //   console.log(res)
            //  })

this.findAll();
  }
  username ='';
  password= '';
  status=''
  showtable=false;
  showModal: boolean=false;
teams: any;
registration: any;
public showData(){
  if(this.username==='jitendra' && this.password==='test'){
    this.status='login successFully';
    this.showtable=true;
this.router.navigate(['/login']);
  }
  else{
    this.status='credential  not matched ';
    this.showtable=false;
  }
}

public getData(){
this.fakeserviceService.findTeams().subscribe(res=>{
  this.teams= res;
  console.log(this.teams);
})
}
public findAll(){
this.registrationService.findAll().subscribe(res=>{
      this.registration =res;
      localStorage.setItem('dataList', JSON.stringify(this.registration))
})
}
// public deleteData(id: number){
//   this.registrationService.deleteData(id).subscribe(res=>{
//         this.registration= this.registration.filter((a:any)=>a.id !==id);
//   })
//   }
  public deleteData(id: number){
    this.registrationService.deleteData(id).subscribe(res=>{
      console.log("data is deleted  " +res);
      this.findAll();
         // this.registration= this.registration.filter((a:any)=>a.id !==id);
    })
    }
    deletemodal(student:any){
    const elementData=  this.registration.find((element: any)=> {
      return element.id === student.id
    });
      if(elementData){
      this.dialog.open(DeleteModalComponent,{
        height: '200px',
        width: '300px',
        data: {
          id: elementData.id,
          name:elementData
        }
      });}
     // localStorage.setItem('studentId', JSON.stringify( data));
    }
}
