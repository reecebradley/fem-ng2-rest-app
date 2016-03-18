import {Component} from 'angular2/core'
import {WidgetsService} from './widgets-service';
import {WidgetsList} from './widgets-list.component';
import {WidgetDetails} from './widget-details.component';

@Component({
  selector: 'widgets',
  template: `
    <div class="mdl-grid widgets">
      <div class="mdl-cell mdl-cell--6-col">
        <widgets-list [widgets]="widgets"
        (selected)="selectWidget($event)"></widgets-list>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <widget-details [widget]="selectedWidget"
          (create)="createWidget($event)"
          (update)="updateWidget($event)">
        </widget-details>
      </div>
    </div>
  `,
  styles: [`
    .widgets {
      padding: 20px;
    }
  `],
  directives: [WidgetsList, WidgetDetails],
  providers: [WidgetsService]
})
export class Widgets {
  widgets = [];
  selectedWidget = {};
  constructor(private _widgetsService: WidgetsService) {
    this.fetchWidgets();
  }
  
  fetchWidgets() {
    this._widgetsService.fetchWidgets()
    .subscribe(widgets => this.widgets = widgets);
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }
  
  createWidget(widget){
    this._widgetsService.createOne(widget)
    .subscribe(res => this.widgets.push(res));
  }
  updateWidget(widget) {
    console.log('update', widget)
  }
}
