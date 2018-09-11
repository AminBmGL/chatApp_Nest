import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/operator/map';
import { Constants } from '../shared/constants';
import { User } from './types/User.type';

@Injectable()
export class UserService {


  userConnected:User;

  constructor (private http:Http) {
  }

  sendUserName (userName:string) {
    return this.http.post(`http://${Constants.IP}:${Constants.SERVER_PORT}/users`, { userName: userName })
      .toPromise();
  }

}
