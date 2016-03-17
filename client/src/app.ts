import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Items} from './items/items.component';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/items', name: 'Items', component: Items, useAsDefault: true}
])
export class App {}
