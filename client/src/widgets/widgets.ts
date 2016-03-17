import {Component} from 'angular2/core'
import {WidgetsService} from './widgets-service';
import {WidgetsList} from './widgets-list.component';
import {WidgetDetails} from './widget-details.component';

@Component({
  selector: 'widgets',
  template: `
    <div class="mdl-grid items">
      <div class="mdl-cell mdl-cell--6-col">
        <widgets-list [widgets]="widgets"
        (selected)="selectWidget($event)"></widgets-list>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <widget-details [selectedWidget]="selectedWidget"></widget-details>
      </div>
    </div>
  `,
  directives: [WidgetsList, WidgetDetails],
  providers: [WidgetsService]
})
export class Widgets {
  widgets = [];
  selectedWidget = {};

  constructor(_widgetsService: WidgetsService) {
    this.widgets = _widgetsService.widgets;
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }
}
