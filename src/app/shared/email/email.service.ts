import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {Email} from "./email.model";

const url = environment.apiEndpoint + '/email';
@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {

  }
  sendemail(email:Email) : Observable<Email> {
    return this.http.post<Email>(url, email);
  }

}
