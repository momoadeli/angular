import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpErrorService {

  constructor(private http: HttpClient) { }

  fake(): Observable<{}> {
    return this.http.get('http://www.zhgdsfdsfsdf.com');
  }
}
