import {Component} from 'angular2/core';
import {RouteParams, RouteConfig} from 'angular2/router';

@Component({
  selector: 'child',
  template: '<div>child</div>'
})
class ChildComponent {}

@Component({
  selector: 'demo',
  template: `<div class="demo">
    <h1>Demo here</h1>
    <router-outlet></router-outlet>
  </div>`
})
@RouteConfig([
  {path: '/child', name: 'Child', component: ChildComponent, useAsDefault: true}
])
export class Demo {
  constructor(private params: RouteParams) {
    alert(params.get('id'));
  }
}
