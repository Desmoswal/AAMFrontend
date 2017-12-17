import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import {User} from '../../users/user.model';
import {JwtHelper} from 'angular2-jwt';
import {UserAuth} from './userAuth.model';
import {UserService} from '../../users/user.service';

@Injectable()
export class TokenService {
  currentUser: User;


  constructor(private userSer: UserService) {
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public clearToken() {
    localStorage.removeItem('token');
  }

  public isAuthenticated(): Observable<boolean> {
    // get the token
    return Observable.create(obs => {
      obs.next(this.getToken());
    });
  }

  public getUserFromToken(): Observable<UserAuth> {
    return Observable.create(obs => {
      const token = this.getToken();
      let decoded: UserAuth;
      const jwt = new JwtHelper();
      decoded = jwt.decodeToken(token);
      obs.next(decoded);
    });

  }

  // public getCurrentUser(): boolean{
  //   const id = localStorage.getItem('id');
  //   return Observable.create(observable => {
  //     this.userSer.getById(Number(id)).switchMap(userOutput => Observable.create(ob => {
  //         this.currentUser = userOutput;
  //         console.log(userOutput.id);
  //         console.log(this.currentUser.id);
  //         ob.next();
  //       }
  //     ));
  //     observable.next();
  //   });
  // }
}

