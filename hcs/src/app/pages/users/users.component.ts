import { UsersService } from './../../core/services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // LISTA DE USUÁRIOS
  users: any[] = [];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users
      console.log(users, 'dados obtidos')
      console.log(this.users, 'dados armazenados')
    })
  }

  routerToUserCreate(): void {
    this.router.navigate(['/users/create'])
  }

  // addUser(): void {
  //   this.usersService.addUser(this.user)
  //   console.log('produto criado')
  // }

  // getUsers() {
  //   this.usersService.getUsers().subscribe( data => {
  //     this.users = data;
  //     console.log(data)
  //     console.log(this.users)
  //   })
  // }

  // addUser() {
  //   this.usersService.addUser().subscribe( data => {
  //     this.users = [];
  //   })
  // }

}
