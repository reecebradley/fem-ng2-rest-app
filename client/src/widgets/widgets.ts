import {Component} from 'angular2/core'
import {WidgetsService} from './widgets-service';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'widgets',
  template: `
    <h1>Holla at yer widgets!</h1>
    <div class="active-widget">
      {{activeWidget.name}}
      {{activeWidget.description}}
    </div>
    <pre>{{widgets | json}}</pre>
  `,
  providers: [WidgetsService]
})
export class Widgets {
  widgets = [];
  activeWidget = {};

  constructor(_widgetsService: WidgetsService) {
    this.widgets = _widgetsService.widgets;
  }
}
