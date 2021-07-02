import { Injectable } from '@angular/core';

import { Person } from './person/person'
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

  All(): Observable<Person[]> {
    const response = this.http.get<Person[]>(`${this.swapiURL}/people/`)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Person[]>('All()', [])))
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


  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.swapiURL}/people/${id}/`).pipe(
      tap(_ => this.log(`fetched person id=${id}`)),
      catchError(this.handleError<Person>(`getPerson id=${id}`))
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
