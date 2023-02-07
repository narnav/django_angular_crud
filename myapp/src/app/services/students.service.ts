import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IStudent from '../models/Student';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  myServer = 'http://127.0.0.1:8000/student/';

  constructor(private srv: HttpClient, private logServ: LoginService) {}

  getAll(): Observable<IStudent[]> {
    // console.log('aaaaaaaa', this.logServ.access);
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.logServ.access}`,
    };
    const requestOptions = { headers: headers };
    return this.srv.get<IStudent[]>(this.myServer, requestOptions);
  }

  addStudent(newStudent: IStudent): Observable<any> {
    console.log('first');
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.logServ.access}`,
    };
    const requestOptions = { headers: headers };
    return this.srv.post<IStudent>(this.myServer, newStudent, requestOptions);
  }
}
