import { Component } 'angular2/core';

@Component({
	selector: 'dashboard',
    styles: [`
        .title {
            background: #93DE93;
            height: 300px;
            width: 700px;
            display: table-cell;
            vertical-align: middle;
            font-size: 37px;
            text-align: center;
            border: 2px solid #9ACC9A;
        }
  `]
    template: `
        <div class='title'> Title: {{title}}</div>
    `
})
export class LoginCmp {
    title: string = "I'm a Login page";
    
    constructor() {
    }
}