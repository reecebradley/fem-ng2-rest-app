import {Component} from 'angular2/core'
import {WidgetsService} from './widgets-service';

@Component({
  selector: 'widgets',
  template: `
    <h1>Holla at yer widgets!</h1>
    <pre>{{widgets | json}}</pre>
  `,
  providers: [WidgetsService]
})
export class Widgets {
  widgets = [];
  constructor(_widgetsService: WidgetsService) {
    this.widgets = _widgetsService.widgets;
  }
}
