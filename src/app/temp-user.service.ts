import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



var URL ="https://thepeopleorderserver.onrender.com"
// var URL = "http://localhost:9000"

@Injectable({
  providedIn: 'root'
})
export class TempUserService {

  constructor(private Http: HttpClient) { }

  validateCompanyData = function (query: any) {

    var result = {
      companyName: '',
      email: '',
      companyType: '',
      phone:'',
    };

    result.companyName = query.companyName;
    result.email = query.email;
    result.companyType = query.companyType;
    result.phone = query.phone;
    return result
  }

  getAllCompanies() {
    return this.Http.get(`${URL}/tempUser/getAll`, {
      withCredentials: true
    })
  }

  getCompanyById(query: any) {
    console.log(query, "36")
    return this.Http.get(`${URL}/tempUser/getById`, {
      params: {
        id: query
      }
    })
  }

  createComapany(query: any) {
    var companyStructure = this.validateCompanyData(query);
    console.log(companyStructure, "343434");
    return this.Http.post(`${URL}/tempUser`, companyStructure)
  }

  updateCompanyInformation(_id: any, status: any) {
    return this.Http.put(`${URL}/tempUser/updateStatus`, { _id: _id, isActive: status }, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
      }, withCredentials: true
    })
  }


}
