import { Component } from '@angular/core';
import IStudent from './models/Student';
import { LoginService } from './services/login.service';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private stuSer: StudentsService, public loginServ: LoginService) {
    if (loginServ.access.length > 1) {
      stuSer.getAll().subscribe((res) => console.log(res));
    }
  }

  title = '';

  ar: IStudent[] = [];

  displayInfo = (stuName: string, ind: number) => {
    console.log(ind);
  };
  test() {
    console.log(this.loginServ.access);
  }
  getAll() {
    this.stuSer.getAll().subscribe((res) => (this.ar = res));
  }

  addStudent() {
    this.stuSer
      .addStudent({
        sName: 'ido',
        age: 23,
      })
      .subscribe((res) => this.getAll());
  }
}
