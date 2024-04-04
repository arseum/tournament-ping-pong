import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import {TournamentService} from "../tournament.service";
import {AddParticipantResponseDTO, TournamentDTO} from "../rest";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-tournament-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './tournament-detail.component.html',
})
export class TournamentDetailComponent {

  id: string = '';
  data: TournamentDTO | null = null;
  errorOccurred: string | null = null;
  idUserAdd: string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient,
              private tournamentService: TournamentService) {
    this.id = activatedRoute.snapshot.params['id'];
    this.tournamentService.tournamentById(this.id).subscribe({
      next: res => {
        this.data = res;
      }, error: err => {
        console.log('Error occurred', err);
        this.errorOccurred = '(' + err.status + ') ' + err.message;
      }
    });
  }

  onAddUser() {
    this.errorOccurred = null;
    let req = {userId: this.idUserAdd};
    console.log('add new user', req);
    let route = '/api/tournament/' + this.id + '/participants'
    this.httpClient.post<AddParticipantResponseDTO>(route, req)
      .subscribe(
        (res: any) => {
          console.log('Done', res);
          this.errorOccurred = null;
        }, (err: { status: string; message: string; }) => {
          console.log('Error occurred', err);
          this.errorOccurred = '(' + err.status + ') ' + err.message;
        }
      );
  }
}
