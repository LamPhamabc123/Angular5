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
    firstName: string;
    lastName: string;
    age: number;
    address;

    foo: any;
    hasKids: boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, boolean];
    unusable: void;
    u: undefined;
    n: null;


    // Methods
    constructor() {
        this.firstName = 'Lam';
        this.lastName = 'Pham';
        this.age = 30;

        this.address = {
            street: '54 Le Van huan',
            city: 'HCM',
            district: 'Tan Binh'
        }

        this.foo = 1;
        this.hasKids = true;
        this.numberArray = [1,2,3,4];
        this.stringArray = ['hello', 'world'];
        this.mixedArray =[true, undefined, 'hello'];
        this.myTuple =['hello', 1, true];
        this.unusable = undefined;
        this.u = undefined;
        this.n = null;
        
    }

    showAge() {
        return this.age + 2;
    }

    addNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }

}