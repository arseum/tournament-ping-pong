import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

export interface CreateTournamentResponseDTO {
  id: string;
}

@Component({
  selector: 'app-tournament-edit-form',
  standalone: true,
  imports: [NgIf, FormsModule, HttpClientModule],
  templateUrl: './tournament-edit-form.component.html',
})
export class TournamentEditFormComponent {
  tournamentName: string = '';
  errorOccured: string|null = null;

  constructor(private httpClient: HttpClient,
              private router: Router) {

  }

  onSubmit() {
    console.log('submit tournament', this.tournamentName);
    let req = { name: 'Tournament from Angular'};
    this.errorOccured = null;
    this.httpClient.post<CreateTournamentResponseDTO>('/api/tournament', req)
      .subscribe(
        res => {
          console.log('Done', res);
          this.errorOccured = null;

          this.router.navigate(['tournament', res.id]);

        }, err => {
          console.log('Error occured', err);
          this.errorOccured = '(' + err.status + ') ' + err.message;
        }
      );
  }
}
