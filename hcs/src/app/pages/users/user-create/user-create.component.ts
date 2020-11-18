import { Router } from '@angular/router';
import { UsersService } from './../../../core/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user: any = {
    name: '',
    email: '',
    password: '',
    permission: 0
  };

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(): void {
    this.usersService.addUser(this.user)
    console.log('produto criado')
    console.log(this.user)
    this.router.navigate(['/users'])
  }

  cancelar(): void {
    this.router.navigate(['/users'])
  }

}
