import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() {
    // console.log('contructor...');
  }

  ngOnInit() {
    // console.log('init...');
      this.users = [
        {
          firstName: 'Lam',
          lastName: 'Pham',
          age: 32,
  
          address: {
            street: '54 Le Van Huan',
            city: 'HCM',
            district: 'Tan Binh'
          }
        },
        {
          firstName: 'Nam',
          lastName: 'Pham',
          age: 1,
  
          address: {
            street: '55 Le Van Huan',
            city: 'HCM',
            district: 'Tan Binh'
          }
        },
        {
          firstName: 'An',
          lastName: 'Pham',
          age: 1,
  
          address: {
            street: '56 Le Van Huan',
            city: 'HCM',
            district: 'Tan Binh'
          }
        }
      ]

      this.loaded = true;

    this.addUser(
      {
        firstName: 'Duyen',
        lastName: 'Gia',
      });
  }

  addUser(user: User) {
    this.users.push(user)
  }

}
