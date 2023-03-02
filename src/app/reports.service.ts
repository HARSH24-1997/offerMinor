import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private Http: HttpClient) {}

  getReportData(){
    return this.Http.get(`${URL}/reports/getAll`,{
      params:{
        id:JSON.parse(localStorage.getItem('user') as string)._id
      }
    })
  }

  getEmployeeCount(){
    return this.Http.get(`${URL}/reports/getAll`,{
      params:{
        id:JSON.parse(localStorage.getItem('user') as string)._id
      }
    })
  }

  getOfferCount(){
    return this.Http.get(`${URL}/reports/getAll`,{
      params:{
        id:JSON.parse(localStorage.getItem('user') as string)._id
      }
    })
  }

  getFaultCount(){
    return this.Http.get(`${URL}/reports/getAll`,{
      params:{
        id:JSON.parse(localStorage.getItem('user') as string)._id
      }
    })
  }

}
