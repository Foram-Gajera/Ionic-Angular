import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';
import { Student } from '../shared/Student';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-student-app',
  templateUrl: './student-app.page.html',
  styleUrls: ['./student-app.page.scss'],
})
export class StudentAppPage implements OnInit {

  students: Student;

  rootUrl = 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/';

  constructor(private operationService: OperationService, private router: Router, private http: HTTP) { }

  ngOnInit() {
    // this.http.get(this.rootUrl, {}, {}).then(
    //   data => {
    //     this.students = data;
    //   });
    this.operationService.getStudent()
    .subscribe
    (
      data =>
      {
        this.students = data;
      }
    );
  }
  delete(id, studentName){
    const ans = confirm('Do you want to delete Student ' + studentName);
    if (ans){
      if (id){
        this.operationService.deleteStudent(id).subscribe();
        window.location.reload();
        alert('record deleted successfully!');
      }
      else{
        alert('error occurs in deleting');
      }
    }
    else{
      alert('your data is safe!');
    }
  }

  update(id){
    this.router.navigateByUrl('/student-app/add-update-student/' + id);
  }

  add(){
    this.router.navigateByUrl('/student-app/add-update-student/');
  }
}
