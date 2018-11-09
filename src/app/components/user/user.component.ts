import { Component } from '@angular/core';

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

export class UserComponent {
    // Properties
    firstName = 'Lam';
    lastName = 'Pham';
    age = 30;
    address = {
        street: '54 Le Van Huan',
        district: 'Tan Binh',
        city: 'HCM'
    }

    // Methods
    constructor() {
        
    }

    showAge() {
        return this.age + 2;
    }

}