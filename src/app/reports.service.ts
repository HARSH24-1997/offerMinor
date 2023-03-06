import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 var URL ="https://thepeopleorderserver.onrender.com"
// var URL = "http://localhost:9000"
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private Http: HttpClient) {}

  getCompanyCountData(){
    return this.Http.get(`${URL}/user/getCompanyCount`)
  }

  getEmployeeCount(){
    return this.Http.get(`${URL}/employee/countOffer`)
  }


  getFaultCount(){
    // return this.Http.get(`${URL}/reports/getAll`,{
    //   params:{
    //     id:JSON.parse(localStorage.getItem('user') as string)._id
    //   }
    // })
  }

  gettempUserList(){
    return this.Http.get(`${URL}/tempUser/getAll`,{})
  }
  getCompanyWiseData(){
    return this.Http.get(`${URL}/employee/companyEmployee`,{})
  }
}
