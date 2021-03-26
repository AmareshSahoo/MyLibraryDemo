import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }


  //EXAMBLE 1

  /**
    * @param method Accept("GET" | "POST" | "PUT" | "DELETE")
    * @param url string ; ex : /Posts
    * @param body object = {}
    * @param options Optional Params , Object= {} Accept("params:{},headers:{}"),
    * ex : const options = {
    *              params:{
    *                "postId":"1",
    *                "email": "eliseo@gardner.biz"
    *              },
    *                headers:{
    *                "Authorization":"Bearer tfweydsxkmewygsnxwdbxaweynsxawedbxswebhj"
    *              }
    *            }
    *
  */

  httpCall<T>(method: "GET" | "POST" | "PUT" | "DELETE", url: string, body: object = {}, options?: any): Observable<T> {

    console.log("body===", body)
    let serverUrl: string = "https://jsonplaceholder.typicode.com";
    const Url = serverUrl + url;

    let headers = new HttpHeaders();
    let params = new HttpParams();
    headers = headers.append("Content-Type", "application/json");

    if (typeof (options) == "object") {
      if (options.hasOwnProperty('headers')) {
        for (let key in options['headers']) {
          headers = headers.append(key, options['headers'][key]);
        }
      }
      if (options.hasOwnProperty('params')) {
        for (let key in options['params']) {
          params = params.append(key, options['params'][key]);
        }
      }
    }
    switch (method) {
      case "GET": {
        return this.http.get<T>(Url, { headers, params }).pipe(map(res => <T>res));
      }
      case "POST": {
        return this.http.post<T>(Url, body, { headers, params }).pipe(map(res => <T>res));
      }
      case "PUT": {
        return this.http.put<T>(Url, body, { headers, params }).pipe(map(res => <T>res));
      }
      case "DELETE": {
        return this.http.delete<T>(Url, { headers, params }).pipe(map(res => <T>res));
      }
      default: {
        return of();
      }
    }
  }



  //EXAMBLE 2

  /**
    *
    * @param method Accept("get" | "post" | "put" | "delete" | "patch")
    * @param url string ; ex : /posts
    * @param options Optional Params , Object= {} Accept("params:{},headers:{}"),
    * ex : const options = {
    *              body:{
    *                 name: "Amaresh",
    *                 email: "amar@gmail.com"
    *              }
    *              params:{
    *                "postId":"1",
    *                "email": "eliseo@gardner.biz"
    *              },
    *              headers:{
    *                "Authorization":"Bearer tfweydsxkmewygsnxwdbxaweynsxawedbxswebhj"
    *              }
    *            }
    *
  */

  httpCall2<T>(method: "get" | "post" | "put" | "delete" | "patch", url: string, options: any = {}): Observable<T> {
    let serverUrl: string = "https://jsonplaceholder.typicode.com";
    const Url = serverUrl + url;

    let body = {};
    let headers = new HttpHeaders();
    let params = new HttpParams();

    headers = headers.append("Content-Type", "application/json");

    if (typeof (options) === "object") {
      if (options.hasOwnProperty('body')) {
        body = options['body']
      }
      if (options.hasOwnProperty('headers')) {
        for (let key in options['headers']) {
          headers = headers.append(key, options['headers'][key]);
        }
      }
      if (options.hasOwnProperty('params')) {
        for (let key in options['params']) {
          params = params.append(key, options['params'][key]);
        }
      }
    }

    const optionsObject: optionConfig = {
      body: body || {},
      headers: headers || options['headers'] || {},
      params: params || options['params'] || {}
    }

    return this.http.request<T>(method, Url, optionsObject).pipe(map(res => <T>res));
  }


  //EXAMBLE 3

  /**
    * Constructs a request that interprets the body as an `ArrayBuffer` and returns the response in
    * an `ArrayBuffer`.
    *
    * @param method  The HTTP method.
    * @param url     The endpoint URL.
    * @param options The HTTP options to send with the request.
    *
    *
    * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
 */

  request<T>(method: string, url: string, options: optionConfig): Observable<T> {
    return this.http.request<T>(method, url, {
      body: options.body || {},
      headers: options.headers || {},
      params: options.params || {}
    }).pipe(map(res => <T>res));
  }

  Get<T>(url: string, options: optionConfig): Observable<T> {
    return this.request<T>('get', url, options);
  }

  Post<T>(method: string, url: string, options: optionConfig): Observable<T> {
    return this.request(method, url, options);
  }

  put<T>(url: string, options: optionConfig): Observable<T> {
    return this.request<T>('put', url, options);

  }

  delete<T>(url: string, options: optionConfig): Observable<T> {
    return this.request<T>('delete', url, options);
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it   accordingly.
      console.error('An error occurred:', errorResponse.error.message);
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        'Backend returned code ${errorResponse.status}, ' +
        'body was: ${errorResponse.error}');
    }
    // return an observable with a user-facing error message
    return throwError(
      'Error Occurred; please try again later.');
  };


  // More Generic Approach
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError2<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  // Error handling
  handleError3(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

export interface optionConfig {
  body?: any;
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  params?: HttpParams | {
    [param: string]: string | string[];
  };
}
