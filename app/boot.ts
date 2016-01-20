import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core'
import { App } from './app';
import {
    ROUTER_PROVIDERS, 
    HashLocationStrategy, 
    LocationStrategy,
    APP_BASE_HREF,
} from 'angular2/router';

const APP_PROVIDERS: Array<any> = [
    ROUTER_PROVIDERS,
    provide( APP_BASE_HREF, { useValue: '/' } ),
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]

bootstrap(App, APP_PROVIDERS);