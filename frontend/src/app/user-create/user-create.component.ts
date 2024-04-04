import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CreateTournamentResponseDTO} from "../tournament-edit-form/tournament-edit-form.component";
import {User} from "../user";
import {UserPasswordResetEmailResponseDTO} from "../rest";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './user-create.component.html'
})
export class UserCreateComponent {

  // @ts-ignore
  tempUser: User = {birthdate: undefined, email: "", firstName: "", lastName: "", password: ""};
  errorOccurred: string | null = null;

  constructor(private httpClient: HttpClient) {

  }

  onSubmit() {
    console.log('submit new user', this.tempUser);
    // let req = {name: 'Tournament from Angular'};
    this.errorOccurred = null;
    this.httpClient.post<UserPasswordResetEmailResponseDTO>('/api/user', this.tempUser)
      .subscribe(
        res => {
          console.log('Done', res);
          this.errorOccurred = null;

          // this.router.navigate(['tournament', res.id]);

        }, err => {
          console.log('Error occurred', err);
          this.errorOccurred = '(' + err.status + ') ' + err.message;
        }
      );
  }


}
