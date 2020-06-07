import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VideoDetailsModel } from '../models/videoDetails.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  addVideo(data:VideoDetailsModel):Observable<any>{
    return this.http.post<any>(this.apiUrl + "dashboard/adddashboard", data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  editVideo(data:VideoDetailsModel):Observable<any>{
    return this.http.put<any>(this.apiUrl + "dashboard/"+ data.userid, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteVideo(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl + "dashboard/"+ id).pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
