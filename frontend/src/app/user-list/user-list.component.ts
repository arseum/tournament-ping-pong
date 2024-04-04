import {Component} from '@angular/core';
import {UserDTO} from "../rest";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './user-list.component.html'
})
export class UserListComponent {

  users: UserDTO[] = [];
  loading = false;
  loadingMsg: string | null = null;

  constructor(private userService: UserService) {
  }

  // ngOnInit(): void {
  //   this.doFetch();
  // }
  //
  // onClickRefresh() {
  //   this.doFetch();
  // }

  // doFetch() {
  //   this.loading = true;
  //   this.loadingMsg = 'Loading..';
  //   this.tournamentService.listTournaments().subscribe({
  //     next: data => {
  //       this.users = data;
  //       this.loading = false;
  //       this.loadingMsg = null;
  //     }, error: err => {
  //       console.error('Failed to fetch tournaments ', err);
  //       this.loading = false;
  //       this.loadingMsg = 'Failed to get tournaments ' + err.message;
  //     }
  //   });
  // }


}
