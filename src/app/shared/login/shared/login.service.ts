import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {TokenService} from './token.service';
import {User} from '../../users/user.model';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';
import {Payload} from './payload.model';
import {UserService} from '../../users/user.service';

const url = environment.apiEndpoint + '/login';

@Injectable()
export class LoginService {

  //public currentUser: User;

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private userSer: UserService) {

  }

  public login(user: User): Observable<string> {

    return this.http.post<any>(url, {username: user.username, password: user.password}, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      }
    ).switchMap(payload => Observable.create(obs => {
      const obj: Payload = payload;
      this.tokenService.setToken(obj.token);
      //localStorage.setItem('Id', obj.userID.toString());
      obs.next(payload);
    }));
  }

  public logout(): Observable<boolean> {
    return Observable.create(obs => {
      this.tokenService.clearToken();
      localStorage.removeItem('Id');
      obs.next(!this.tokenService.getToken());
    });
  }

}
