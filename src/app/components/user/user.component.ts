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
    firstName: 'Lam';
    last: 'Pham';
    age: 30;

    // Methods
    constructor() {
        console.log('Hello User ...');
    }

    sayHello() {
        console.log(`Hello ${this.firstName}`);
    }

    hasBirthday() {
        this.age +=1;
    }
}