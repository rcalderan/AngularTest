import { Injectable } from '@angular/core';

import { PersonResponse } from './person/person-response';
import { DataPerson } from './person/mock-person';
//observable from RxJS library
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
//messages
import { MessageService } from './message.service';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  //api url
  private swapiURL = 'https://swapi.dev/api/'

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  All(): Observable<PersonResponse> {
    const response = this.http.get<PersonResponse>(`${this.swapiURL}/people/`)
      .pipe(
        tap(_ => this.log('fetched persons')),
        catchError(this.handleError<PersonResponse>('All()', undefined)))
    /*
      let luke: Person
    response.subscribe(gotPersons => {
      luke = gotPersons[0]
      alert(luke.name)
      let ret = gotPersons
      for (let i = 0; i < gotPersons.length; i++)
        ret[i].id = i

      this.messageService.add('PersonService: fetched all persons');
      return ret
    },
      error => {
        alert(error)
        this.messageService.add("observable error..." + error);
        return []
      })
*/
    return response
  }


  getPerson(id: number): Observable<PersonResponse> {
    return this.http.get<PersonResponse>(`${this.swapiURL}/people/${id}/`).pipe(
      tap(_ => this.log(`fetched aaaaaaaaaaaaaperson id=${id}`)),
      catchError(this.handleError<PersonResponse>(`getPerson id=${id}`))
    );
    /* was
    //const person = DataPerson.find(p => p.id === id)!
    this.messageService.add(`PersonService: got person ${person.name}`);
    return of(person);*/
  }

  private log(message: string) {
    this.messageService.add(`PersonService: ${message}`)
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
