import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(public http: HttpClient) { }

  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods" : "POST, GET, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  };

  httpOptions = { headers: new HttpHeaders(this.headers) };

  serviceReturnEmployees(){
    return new Promise((resolve,reject) => {
      this.http.get("http://dummy.restapiexample.com/api/v1/employees").subscribe(d =>{
        resolve(d);
      }),err =>{
        reject(err);
      }
    })
  }

  serviceReturnEmployeesById(id){
    return new Promise((resolve, reject) => {
      this.http.get("http://dummy.restapiexample.com/api/v1/employee/"+id).subscribe(d =>{
        resolve(d);
      }),err =>{
        reject(err);
      }
    });
  }

  serviceCreateEmployees(employee){
    return new Promise((resolve, reject) =>{
      this.http.post("http://dummy.restapiexample.com/api/v1/create", employee, this.httpOptions).subscribe(d => {
        resolve(d);
      }),err =>{
        reject(err);
      }
    });
  }

  serviceUpdateEmployee(employee, id){
    return new Promise((resolve, reject) =>{
      this.http.put("http://dummy.restapiexample.com/api/v1/update/"+id, employee, this.httpOptions).subscribe(d => {
        resolve(d);
      }),err =>{
        reject(err);
      }
    });
  }

  serviceDeleteEmployee(id){
    return new Promise((resolve, reject) =>{
      this.http.delete("http://dummy.restapiexample.com/api/v1/delete/"+id).subscribe(d => {
        resolve(d);
      }),err =>{
        reject(err);
      }
    });
  }

}
