import { Component, Input, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { RegistrationDTO } from '../model/signup.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  ids:number;
  names: string;
user:{id: number, name: string};
showChildEvent: string;
  data ="jitendra";
  message: string='';
  showEvent: string;
  @Input() registration: any;
  @Input() showOnlyDropdown = false;

  registrationDTO: RegistrationDTO =new RegistrationDTO();

       constructor(private registrationService: RegistrationService, private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner:NgxSpinnerService){

       }
  ngOnInit(): void {
      /** spinner starts on init */
      this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);
    //   this.user ={
    //   id :this.activatedRoute.snapshot.queryParams['id'],
    //   name : this.activatedRoute.snapshot.queryParams['name']
    // }
    // console.log(this.user);
    this.activatedRoute.queryParams.subscribe((params)=>{
      if(params['id']){
        this.ids=params['id'];
        console.log(this.ids);

      }
      if (params['name']) {
        this.names = params['name'];
        console.log(this.names);
      }





    })
    console.log(this.registration) ;
    }


   public create(){
    this.registrationService.create(this.registrationDTO).subscribe(res=>{
     if(res!=null){
       this.message="data  registration successfully"
     }
     else{
      this.router.navigate(['/login']);
     }
    })
   }

   tests(event: string){
      this.message=event;
   }
   showEvents(){
  this.showEvent ="hello show event is true"
   }
   showEventChild(){
    this.showChildEvent="child event is called";
   }
}
