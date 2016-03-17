import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Items} from './items/items.component';
import {Demo} from './demo';
import {Widgets} from './widgets/widgets';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/items', name: 'Items', component: Items, useAsDefault: false},
  {path: '/demo/...', name: 'Demo', component: Demo},
  {path: '/widgets/:id', name: 'Widgets', component: Widgets}
])
export class App {
  links = {
    items: ['Items'],
    demo: ['Demo'],
    widgets: ['Widgets', {id: 1}]
  }
  
  constructor(private _router: Router) {}
  
  goToDemo() {
    this._router.navigate(this.links.demo)
  }
}
