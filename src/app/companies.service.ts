import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private Http: HttpClient) { }

  validateCompanyData = function(query:any){
    var result = {
      companyName:'',
      email:'',
      subdomain:'',
      companyType:'',
      // createdBy:localStorage.get('User'),
      isActive:false,
    };
    result.companyName = query.companyName;
    result.email = query.email;
    result.subdomain = query.subdomain;
    result.companyType = query.companyType;
    result.isActive = query.isActive;

    return result
  }

  getAllCompanies() {
    return this.Http.get('http://localhost:9000/user/getAll',{
      withCredentials:true
    })
  }

  getCompanyById(query: any) {
    return this.Http.get('http://localhost:9000/user', {
      params: query
    })
  }

  createComapany(query: any) {
    var companyStructure = this.validateCompanyData(query);
    console.log(companyStructure,"343434");
    return this.Http.post('http://localhost:9000/user', companyStructure)
  }

  updateCompanyInformation(_id:any,status:any) {
    return this.Http.put('http://localhost:9000/user/updateStatus', {_id:_id,isActive:status}, {
      headers: {
        "Authorization": "Bearer " +  localStorage.getItem('token')
      }, withCredentials: true
    })
  }

}
