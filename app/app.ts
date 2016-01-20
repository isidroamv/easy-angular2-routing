import { Component } 'angular2/core';
import {
    RouterLink,
    RouterOutlet,
    RouteConfig
} from 'angular2/router';
import { LoginCmp } from './components/login/login';
import { DashboardCpm } from './components/dashboard/dashboard';

@Component({
	selector: 'app',
	templateUrl: './app/app.html',
    directives: [RouterLink, RouterOutlet]
})
@RouteConfig([
    {path: 'dashboard', component: DashboardCpm, name: 'Dashboard'},
    {path: 'login', component: LoginCmp, name: 'Login', useAsDefault: true}
])
export class App {
    
}