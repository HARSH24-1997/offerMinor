import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


var URL ="https://thepeopleorderserver.onrender.com"
// var URL = "http://localhost:9000"


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private Http: HttpClient) { }

  validateCompanyData = function (query: any) {
    var result = {
      companyName: '',
      email: '',
      companyType: '',
      createdBy:JSON.parse(localStorage.getItem('user') as string).companyName,
      isActive: true,
      phone:'',
      expiryDate:''
    };
    result.companyName = query.companyName;
    result.email = query.email;
    result.companyType = query.companyType;
    result.phone = query.phone;
    result.expiryDate = query.expiryDate;

    return result
  }

  getAllCompanies() {
    return this.Http.get(`${URL}/user/getAll`, {
      withCredentials: true
    })
  }

  getCompanyById(query: any) {
    console.log(query, "36")
    return this.Http.get(`${URL}/user/getById`, {
      params: {
        id: query
      }
    })
  }

  createComapany(query: any) {
    var companyStructure = this.validateCompanyData(query);
    console.log(companyStructure, "343434");
    return this.Http.post(`${URL}/user`, companyStructure)
  }

  updateCompanyInformation(_id: any, status: any) {
    return this.Http.put(`${URL}/user/updateStatus`, { _id: _id, isActive: status }, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
      }, withCredentials: true
    })
  }

  updateCompanyInformationExpiryDate(_id: any, toChange: any) {
    return this.Http.put(`${URL}/user/updateStatus`, { _id: _id, expiryDate:new Date(toChange) }, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
      }, withCredentials: true
    })
  }

}
