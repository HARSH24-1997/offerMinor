import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


var URL ="https://thepeopleorderserver.onrender.com"
//  var URL = "http://localhost:9000"

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private Http: HttpClient) {}


  validateEmployeeData = function(query:any){
    var result = {
      id:'',
      name:'',
      email:'',
      code:'',
      panCardId:'',
      aadharCardId:'',
      company_id:'',
      companyName:'',
      phone:'',
      status:'',
      dateOfJoining:'',
      dateOfOffer:'',
      createdBy:'',
      remarks:'',
      isActive:false,
      companyDetails:{
        email:''
      }
    };
    result.name = query.name;
    result.email = query.email;
    result.panCardId = query.panCardId;
    result.code = query.code;
    result.aadharCardId = query.aadharCardId;
    result.company_id =JSON.parse(localStorage.getItem('user') as string)._id
    result.companyName = JSON.parse(localStorage.getItem('user') as string).companyName;
    result.phone = query.phone;
    result.status = query.status;
    result.remarks = query.Remarks;
    result.dateOfJoining = query.dateOfJoining;
    result.dateOfOffer = query.dateOfOffer;
    result.isActive = query.isActive;
    result.createdBy = JSON.parse(localStorage.getItem('user') as string)._id
    result.companyDetails = {
      email:JSON.parse(localStorage.getItem('user') as string).email
    }
    return result
  }

  getAllEmpoyees() {
    return this.Http.get(`${URL}/employee/getAll`,{
      params:{
        id:JSON.parse(localStorage.getItem('user') as string)._id
      }
    })
  }

  getEmployeeById(query: any) {
    console.log(query)
    return this.Http.get(`${URL}/employee/getById`,{
      params:{
        id:query.id
      }
    })
  }

  createEmployee(query: any) {
    var companyStructure = this.validateEmployeeData(query);
    return this.Http.post(`${URL}/employee`, companyStructure)
  }

  updataEmployeeById(query: any,id:string,cname:string,c_id:string,email:string) {
    var companyStructure = this.validateEmployeeData(query);
    companyStructure.id = id;
    companyStructure.company_id=c_id
    companyStructure.companyName=cname
    companyStructure.companyDetails.email=email
    return this.Http.put(`${URL}/employee/updateUser`, companyStructure)
  }
}
