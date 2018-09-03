import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { Student } from "./student";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor(private http: HttpClient) {}

  private studentsUrl = "api/students"; // URL to web api
  /** GET heroes from the server */
  getHeroes(): Observable<Student[]> {
    return this.http
      .get<Student[]>(this.studentsUrl) //observable

      .pipe(
        // here we add methods built in from rxjs operator
        tap(heroes => this.log("fetched heroes")),
        catchError(this.handleError("getHeroes", []))
      ); // log streams of events (observables) //catch errors
  }
}
