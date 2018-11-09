import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    // template: '<h2>Lam Pham</h2>'
    styleUrls: ['./user.component.css']
    // styles: [`
    //     h2 {
    //         color: red;
    //     }
    // `]
})

export class UserComponent implements OnInit {
    // Properties
    user: User;

    // Methods
    constructor() {
        
   }

   ngOnInit() {
    this.user = {
        firstName: 'Lam',
        lastName: 'Pham',
        age: 30,

        address: {
            street: '54 Le Van Huan',
            city: 'HCM',
            district: 'Tan Binh'
        }
    }
   }
}

