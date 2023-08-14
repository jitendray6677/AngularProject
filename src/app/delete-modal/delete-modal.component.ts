import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent implements OnInit {
  listOfData: any;
  id: number = 0;
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<DeleteModalComponent>,
    private registrationService: RegistrationService,
    @Inject(MAT_DIALOG_DATA) public data: DeleteModalComponent,
  ) {}
  ngOnInit(): void {
    const values = localStorage.getItem('dataList');
    this.listOfData = values && JSON.parse(values);
    console.log(this.data);
    const stdId=localStorage.getItem('studentId');
          this.id= stdId && JSON.parse(stdId);
  }

  cancel() {
    this.dialogRef.close();
  }
  // public showData() {
  //   // this.listOfData.forEach((element: any) => {
  //   //   this.id = element.id;
  //   const result =this.listOfData.filter((element: any)=> element.id);
  //     this.id=result[0].id;

  // }

  public deleteStudent(id:number ) {
    //const data =this.listOfData.filter((element:any)=> element.id=== id);
    this.registrationService.deleteData(id).subscribe((res) => {
      console.log('data is deleted  ' + res);
      this.dialogRef.close();
      window.location.reload();
      // this.registration= this.registration.filter((a:any)=>a.id !==id);
    });
    this.dialogRef.close();
  }
}
