import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {TokenService} from './token.service';
import {User} from '../../users/user.model';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';
import {Payload} from './payload.model';
import {UserService} from '../../users/user.service';
import {Router} from '@angular/router';

const url = environment.apiEndpoint + '/login';

@Injectable()
export class LoginService {


  constructor(private http: HttpClient,
              private tokenService: TokenService) {

  }

  public login(user: User): Observable<string> {

    return this.http.post<any>(url, {username: user.username, password: user.password}, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      }
    ).switchMap(payload => Observable.create(obs => {
      const obj: Payload = payload;
      if (obj.token) {
        this.tokenService.setToken(obj.token);
        obs.next(obj.token);
      }
    }));
  }

  public logout(): Observable<boolean> {
    return Observable.create(obs => {
      this.tokenService.clearToken();
      obs.next(!this.tokenService.getToken());
    });
  }

}
