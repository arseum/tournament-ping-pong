import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import {TournamentService} from "../tournament.service";
import {TournamentDTO} from "../rest";


@Component({
  selector: 'app-tournament-detail',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './tournament-detail.component.html',
})
export class TournamentDetailComponent {

  id: string = '';
  data: TournamentDTO|null = null;
  errorOccured: string | null = null;

  constructor(private activatedRoute: ActivatedRoute,
              private tournamentService: TournamentService) {
    this.id = activatedRoute.snapshot.params['id'];
    this.tournamentService.tournamentById(this.id).subscribe({
      next: res => {
        this.data = res;
      }, error: err => {
        console.log('Error occured', err);
        this.errorOccured = '(' + err.status + ') ' + err.message;
      }
    });
  }
}
