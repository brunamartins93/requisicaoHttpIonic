import { Component } from '@angular/core';
import { RequisicaoService } from '../../services/requisicao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public requisicao: RequisicaoService) {
    this.returnEmployees();
    this.returnEmployeesById(8598);
  }

  clickCreate(){
    let obj = {"name":"testBruna","salary":"123","age":"26"};
    this.createEmployees(obj);
  }

  clickUpdate(){
    let obj = {"name":"testBruna2","salary":"123","age":"26"};
    this.updateEmployee(obj, 8598);
  }

  clickDelete(){
    this.deleteEmployee(8577);
  }

  returnEmployees(){
    this.requisicao.serviceReturnEmployees().then(d => {
      console.log("Todas as empresas: ", d);
    }).catch(err => {
      console.log("Erro", err);
    });
  }

  returnEmployeesById(id){
    this.requisicao.serviceReturnEmployeesById(id).then(d => {
      console.log("Empresa por id: ", d);
    }).catch(err => {
      console.log("Erro", err);
    });
  }

  createEmployees(employee){
    this.requisicao.serviceCreateEmployees(employee).then(d => {
      console.log("Empresa criada: ", d);
    }).catch(err => {
      console.log("Erro", err);
    });
  }

  updateEmployee(employee, id){
    this.requisicao.serviceUpdateEmployee(employee, id).then(d => {
      console.log("Empresa alterada: ", d);
    }).catch(err => {
      console.log("Erro", err);
    });
  }

  deleteEmployee(id){
    this.requisicao.serviceDeleteEmployee(id).then(d => {
      console.log("Empresa deletada: ", d);
    }).catch(err => {
      console.log("Erro", err);
    });
  }

}
