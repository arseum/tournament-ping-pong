import {Injectable} from '@angular/core';
import {UserRestControllerService} from "./rest";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private tournamentApi: UserRestControllerService
  ) {
  }

}
