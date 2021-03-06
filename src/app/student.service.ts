import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import { Student } from "./student";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private studentsUrl = "api/students"; // URL to web api
  /** Log a StudentService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }
  /** GET heroes from the server */
  getStudents(): Observable<Student[]> {
    return this.http
      .get<Student[]>(this.studentsUrl) //observable

      .pipe(
        // here we add methods built in from rxjs operator
        tap(students => this.log("fetched students")),
        catchError(this.handleError("getStudents", []))
      ); // log streams of events (observables) //catch errors
  }
}
