import { Component } 'angular2/core';

@Component({
	selector: 'dashboard',
    styleUrls: ['./app/components/dashboard/dashboard.css'],
	templateUrl: './app/components/dashboard/dashboard.html'
})
export class DashboardCpm {
    title: string = "I'm a dashboard Page";
    
    constructor() {
    }
}