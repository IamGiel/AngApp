import { Component, OnInit } from "@angular/core";

import { StudentService } from "../student.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  constructor(private studentService: StudentService) {}
  students = [];
  getStudents() {
    this.studentService
      .getStudents()
      .subscribe(students => (this.students = students));
  }
  ngOnInit() {
    this.getStudents();
  }
}
