import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private Http: HttpClient) {}


  validateEmployeeData = function(query:any){
    var result = {
      name:'',
      email:'',
      panCardId:'',
      company_id:'',
      companyName:'',
      phone:'',
      status:'',
      dateOfJoining:'',
      dateOfOffer:'',
      createdBy:'',
      // createdBy:localStorage.get('User'),
      isActive:false,
    };
    result.name = query.name;
    result.email = query.email;
    result.panCardId = query.panCardId;
    result.company_id =JSON.parse(localStorage.getItem('user') as string)._id
    result.companyName = JSON.parse(localStorage.getItem('user') as string).companyName;
    result.phone = query.phone;
    result.status = query.status;
    result.dateOfJoining = query.dateOfJoining;
    result.dateOfOffer = query.dateOfOffer;
    result.isActive = query.isActive;

    return result
  }

  getAllEmpoyees() {
    return this.Http.get('http://localhost:9000/employee/getAll',{
      params:{
        id:JSON.parse(localStorage.getItem('user') as string)._id
      }
    })
  }

  getEmployeeById(query: any) {
    return this.Http.get('http://localhost:9000/employee', {
      params: query
    })
  }

  createEmployee(query: any) {
    var companyStructure = this.validateEmployeeData(query);
    return this.Http.post('http://localhost:9000/employee', companyStructure)
  }

  updateEmployeeInformation(query: any) {
    return this.Http.put('http://localhost:9000/employee', query)
  }
}
