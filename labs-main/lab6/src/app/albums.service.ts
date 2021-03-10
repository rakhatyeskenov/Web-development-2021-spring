import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Albums } from './albums';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(this.albumsUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getAlbum(id: number): Observable<Albums> {
    const url = `${this.albumsUrl}/${id}`;
    return this.http.get<Albums>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPhotos(id: number): Observable<Photos[]> {
    const url = `${this.albumsUrl}/${id}/photos`;
    return this.http.get<Photos[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  addAlbum(album: Albums): Observable<Albums> {
    return this.http.post<Albums>(this.albumsUrl, album, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteAlbum(album: Albums | number): Observable<{}> {
    const id = typeof album === 'number' ? album : album.id;
    const url = `${this.albumsUrl}/${id}`;
    return this.http.delete<Albums>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateAlbum(album: Albums): Observable<Albums> {
    return this.http.put<Albums>(this.albumsUrl, album, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

}
