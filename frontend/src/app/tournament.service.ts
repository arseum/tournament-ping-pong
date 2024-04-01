import { Injectable } from '@angular/core';
import {TournamentDTO, TournamentRestControllerService} from "./rest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
    private tournamentApi: TournamentRestControllerService
  ) { }

  listTournaments(): Observable<TournamentDTO[]> {
    return this.tournamentApi.list();
  }

  tournamentById(id: string): Observable<TournamentDTO> {
    return this.tournamentApi.getById(id);
  }

}
