import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Items} from './items/items.component';
import {Widgets} from './widgets/widgets';
import {RedditService} from './reddit';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  providers: [RedditService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/items', name: 'Items', component: Items, useAsDefault: true},
  {path: '/widgets', name: 'Widgets', component: Widgets}
])
export class App {
  links = {
    items: ['Items'],
    widgets: ['Widgets']
  }
  
  posts = []
  
  constructor(redditService: RedditService) {
    redditService.fetchFrontPage()
    .subscribe(data => {
      this.posts = data;
    });
  }
}
