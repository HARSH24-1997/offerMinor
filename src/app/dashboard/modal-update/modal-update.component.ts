import { Component,ElementRef,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent {

  employeeData:any={}
  

  constructor(private route:ActivatedRoute,private employeeService:EmployeesService){}

  employeeForm!: FormGroup;

  formatDate(date:Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  ngOnInit(){
    this.route.params.subscribe((snap)=>{
      this.employeeService.getEmployeeById(snap).subscribe((resp)=>{
        this.employeeData=resp    
        console.log(this.formatDate(new Date(this.employeeData.dateOfJoining)))    
        this.employeeForm = new FormGroup({
          name: new FormControl(this.employeeData.name?this.employeeData.name:""),
          code: new FormControl(this.employeeData.code?this.employeeData.code:""),
          phone: new FormControl(this.employeeData.phone?this.employeeData.phone:""),
          email: new FormControl(this.employeeData.email?this.employeeData.email:""),
          panCardId: new FormControl(this.employeeData.panCardId?this.employeeData.panCardId:""),
          aadharCardId: new FormControl(this.employeeData.aadharCardId?this.employeeData.aadharCardId:""),
          dateOfOffer: new FormControl(""),
          dateOfJoining: new FormControl(""),
          status: new FormControl(this.employeeData.status?this.employeeData.status:""),
          remarks: new FormControl(this.employeeData.remarks?this.employeeData.remarks:""),
          isActivate: new FormControl(this.employeeData.isActivate?this.employeeData.isActivate:"")
        })
        this.employeeForm.get('dateOfJoining')?.patchValue(this.formatDate(new Date(this.employeeData.dateOfJoining)))
        this.employeeForm.get('dateOfOffer')?.patchValue(this.formatDate(new Date(this.employeeData.dateOfOffer)))
      })
    })
  }

  onSubmit(event:any){
    event.preventDefault();
    if (this.employeeForm.invalid) {
      return;
    }
    this.employeeService.updataEmployeeById(this.employeeForm.value,this.employeeData._id,this.employeeData.companyName,this.employeeData.company_id,this.employeeData.companyDetails.email).subscribe((resp)=>{
    })
  }

 
  

}
